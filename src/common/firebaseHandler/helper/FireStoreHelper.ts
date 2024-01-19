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
import { IFirebaseOptions } from '../interface/FirebaseInterface'
import { handelFindConstrains } from '../service/FireBaseService'
import { FireAuthHelper } from './FireAuthHelper'

export class FireStoreHelper {
    private static checkAuth = async () => {
        const currentUser = await FireAuthHelper.getCurrentUser()

        if (!currentUser.userId) {
            throw {
                message: 'Not Authenticated',
                code: 'NOT_AUTHENTICATED',
                status: 401
            }
        }
    }

    static async find<T>(
        collectionName: string,
        { where, mixedWhere, limit, orderBy, isAuthGuard }: IFirebaseOptions = {}
    ): Promise<T> {
        if (isAuthGuard) {
            this.checkAuth()
        }

        let constrains = handelFindConstrains({ where, mixedWhere, limit, orderBy })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains)
        const querySnapshot = await getDocs(q)

        let data

        if (querySnapshot.docs.length > 0) {
            data = querySnapshot.docs.map(doc => {
                const createdAt = doc.data().createdAt?.toDate()
                const updatedAt = doc.data().updatedAt?.toDate()
                return {
                    ...doc.data(),
                    id: doc.id,
                    createdAt: createdAt ? createdAt.getTime() : undefined,
                    updatedAt: updatedAt ? updatedAt.getTime() : undefined
                }
            })
        }

        return data as T
    }

    static async findOne<T>(
        collectionName: string,
        {
            where,
            mixedWhere,
            isAuthGuard
        }: Pick<IFirebaseOptions, 'where' | 'mixedWhere' | 'isAuthGuard'> = {}
    ): Promise<T | undefined> {
        if (isAuthGuard) {
            this.checkAuth()
        }

        let constrains = handelFindConstrains({ where, mixedWhere })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains, limitStatement(1))
        const querySnapshot = await getDocs(q)

        let data

        if (querySnapshot.docs.length > 0) {
            const createdAt = querySnapshot.docs[0].data().createdAt?.toDate()
            const updatedAt = querySnapshot.docs[0].data().updatedAt?.toDate()
            data = {
                ...querySnapshot.docs[0].data(),
                id: querySnapshot.docs[0].id,
                createdAt: createdAt ? createdAt.getTime() : undefined,
                updatedAt: updatedAt ? updatedAt.getTime() : undefined
            }
        }

        return data as T | undefined
    }

    static async findByDocId<T>(
        collectionName: string,
        id: string,
        { isAuthGuard }: Pick<IFirebaseOptions, 'isAuthGuard'> = {}
    ): Promise<T | undefined> {
        if (isAuthGuard) {
            this.checkAuth()
        }

        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            return undefined
        }

        const createdAt = docSnap.data()?.createdAt?.toDate()
        const updatedAt = docSnap.data()?.updatedAt?.toDate()

        return {
            ...docSnap.data(),
            id: docSnap.id,
            createdAt: createdAt ? createdAt.getTime() : undefined,
            updatedAt: updatedAt ? updatedAt.getTime() : undefined
        } as T
    }

    static add = async (
        collectionName: string,
        data: any,
        { isAuthGuard }: Pick<IFirebaseOptions, 'isAuthGuard'> = {}
    ): Promise<string> => {
        if (isAuthGuard) {
            this.checkAuth()
        }

        const addCreatedAtToData = { ...data, createdAt: new Date() }
        const collectionInstance = collection(db, collectionName)
        const docRef = await addDoc(collectionInstance, addCreatedAtToData)

        return docRef.id
    }

    static set = async (
        collectionName: string,
        id: string,
        data: any,
        {
            override,
            isAuthGuard
        }: { override?: boolean; isAuthGuard?: boolean } = {}
    ): Promise<void> => {
        if (isAuthGuard) {
            this.checkAuth()
        }

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
        data: any,
        { isAuthGuard }: Pick<IFirebaseOptions, 'isAuthGuard'> = {}
    ): Promise<void> => {
        if (isAuthGuard) {
            this.checkAuth()
        }

        const addUpdatedAtToData = { ...data, updatedAt: new Date() }
        const docRef = doc(db, collectionName, id)
        await updateDoc(docRef, addUpdatedAtToData)
    }

    static delete = async (
        collectionName: string,
        id: string,
        { isAuthGuard }: Pick<IFirebaseOptions, 'isAuthGuard'> = {}
    ): Promise<void> => {
        if (isAuthGuard) {
            this.checkAuth()
        }

        const docRef = doc(db, collectionName, id)
        await deleteDoc(docRef)
    }

    static deleteWhere = async (
        collectionName: string,
        {
            where,
            mixedWhere,
            isAuthGuard
        }: Pick<IFirebaseOptions, 'where' | 'mixedWhere' | 'isAuthGuard'> = {}
    ): Promise<void> => {
        if (isAuthGuard) {
            this.checkAuth()
        }

        let constrains = handelFindConstrains({ where, mixedWhere })

        const collectionInstance = collection(db, collectionName)
        const q = query(collectionInstance, ...constrains)
        const querySnapshot = await getDocs(q)

        querySnapshot.docs.forEach(async doc => {
            await deleteDoc(doc.ref)
        })
    }
}
