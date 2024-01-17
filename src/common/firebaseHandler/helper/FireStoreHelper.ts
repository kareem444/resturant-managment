import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    limit as limitStatement,
    addDoc,
    updateDoc,
    setDoc,
    deleteDoc
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { IFirebaseFindOptions } from '../interface/FirebaseInterface'
import { handelFindConstrains } from '../service/FireBaseService'

export class FireStoreHelper {
    static async find<T>(
        collectionName: string,
        { where, mixedWhere, limit, orderBy }: IFirebaseFindOptions = {}
    ): Promise<T> {
        let constrains = handelFindConstrains({ where, mixedWhere, limit, orderBy })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains)
        const querySnapshot = await getDocs(q)

        let data;

        if (querySnapshot.docs.length > 0) {
            data = querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } })
        }

        return data as T
    }

    static async findOne<T>(
        collectionName: string,
        { where, mixedWhere }: Pick<IFirebaseFindOptions, 'where' | 'mixedWhere'> = {}
    ): Promise<T | undefined> {
        let constrains = handelFindConstrains({ where, mixedWhere })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains, limitStatement(1))
        const querySnapshot = await getDocs(q)

        let data;

        if (querySnapshot.docs.length > 0) {
            data = { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id }
        }

        return data as T | undefined
    }

    static async findByDocId<T>(
        collectionName: string,
        id: string
    ): Promise<T | undefined> {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            return undefined
        }

        return { ...docSnap.data(), id: docSnap.id } as T
    }

    static add = async (collectionName: string, data: any): Promise<string> => {
        const addCreatedAtToData = { ...data, createdAt: new Date() }
        const collectionInstance = collection(db, collectionName)
        const docRef = await addDoc(collectionInstance, addCreatedAtToData)

        return docRef.id
    }

    static set = async (
        collectionName: string,
        id: string,
        data: any,
        { override }: { override: boolean } = { override: false }
    ): Promise<void> => {
        const addUpdatedAtToData = { ...data, updatedAt: new Date() }
        if (override) {
            addUpdatedAtToData['createdAt'] = new Date()
        }
        const docRef = doc(db, collectionName, id)
        await setDoc(docRef, addUpdatedAtToData, { merge: !override })
    }

    static update = async (
        collectionName: string,
        id: string,
        data: any
    ): Promise<void> => {
        const addUpdatedAtToData = { ...data, updatedAt: new Date() }
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, addUpdatedAtToData)
    }

    static delete = async (collectionName: string, id: string): Promise<void> => {
        const docRef = doc(db, collectionName, id)
        await deleteDoc(docRef)
    }

    static deleteWhere = async (
        collectionName: string,
        { where, mixedWhere }: Pick<IFirebaseFindOptions, 'where' | 'mixedWhere'> = {}
    ): Promise<void> => {
        let constrains = handelFindConstrains({ where, mixedWhere })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains)
        const querySnapshot = await getDocs(q)

        querySnapshot.docs.forEach(async doc => {
            await deleteDoc(doc.ref)
        })
    }
}
