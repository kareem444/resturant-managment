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
    deleteDoc,
    Firestore,
} from "firebase/firestore";
import { IFirebaseOptions, ISetFirebaseOptions } from "../interface/FirebaseInterface";
import { handelFindConstrains } from "../service/FireBaseService";
import { FireAuthHelper } from "./FireAuthHelper";
import { FireBaseErrorsConstants } from "../constants/FireBaseErrorsConstants";

export class FireStoreHelper {
    private static db: Firestore | undefined = undefined;

    static setDB = (db?: Firestore) => {
        this.db = db;
    };

    private static checkAuth = async () => {
        const currentUser = await FireAuthHelper.getOrganizationLocalData();

        if (!currentUser?.ownerId) {
            throw FireBaseErrorsConstants.NOT_AUTHENTICATED;
        }
    };

    static async find<T>(
        collectionName: string,
        {
            where,
            mixedWhere,
            limit,
            orderBy,
            isAuthGuard,
            DB = this.db,
        }: IFirebaseOptions = {}
    ): Promise<T> {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        let constrains = handelFindConstrains({
            where,
            mixedWhere,
            limit,
            orderBy,
        });

        const collectionInstance = collection(DB, collectionName);
        const q = query(collectionInstance, ...constrains);
        const querySnapshot = await getDocs(q);

        let data;

        if (querySnapshot.docs.length > 0) {
            data = querySnapshot.docs.map((doc) => {
                const createdAt = doc.data().createdAt?.toDate();
                const updatedAt = doc.data().updatedAt?.toDate();
                return {
                    ...doc.data(),
                    id: doc.id,
                    createdAt: createdAt ? createdAt.getTime() : undefined,
                    updatedAt: updatedAt ? updatedAt.getTime() : undefined,
                };
            });
        }

        return data as T;
    }

    static async findOne<T>(
        collectionName: string,
        {
            where,
            mixedWhere,
            isAuthGuard,
            DB = this.db,
        }: Pick<
            IFirebaseOptions,
            "where" | "mixedWhere" | "isAuthGuard" | "DB"
        > = {}
    ): Promise<T | undefined> {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        let constrains = handelFindConstrains({ where, mixedWhere });

        const collectionInstance = collection(DB, collectionName);
        const q = query(collectionInstance, ...constrains, limitStatement(1));
        const querySnapshot = await getDocs(q);

        let data;

        if (querySnapshot.docs.length > 0) {
            const createdAt = querySnapshot.docs[0].data().createdAt?.toDate();
            const updatedAt = querySnapshot.docs[0].data().updatedAt?.toDate();
            data = {
                ...querySnapshot.docs[0].data(),
                id: querySnapshot.docs[0].id,
                createdAt: createdAt ? createdAt.getTime() : undefined,
                updatedAt: updatedAt ? updatedAt.getTime() : undefined,
            };
        }

        return data as T | undefined;
    }

    static async findByDocId<T>(
        collectionName: string,
        id: string,
        {
            isAuthGuard,
            DB = this.db,
        }: Pick<IFirebaseOptions, "isAuthGuard" | "DB"> = {}
    ): Promise<T | undefined> {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        const docRef = doc(DB, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return undefined;
        }

        const createdAt = docSnap.data()?.createdAt?.toDate();
        const updatedAt = docSnap.data()?.updatedAt?.toDate();

        return {
            ...docSnap.data(),
            id: docSnap.id,
            createdAt: createdAt ? createdAt.getTime() : undefined,
            updatedAt: updatedAt ? updatedAt.getTime() : undefined,
        } as T;
    }

    static add = async (
        collectionName: string,
        data: any,
        { isAuthGuard, DB = this.db }: Pick<IFirebaseOptions, "isAuthGuard" | 'DB'> = {}
    ): Promise<string> => {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        const addCreatedAtToData = { ...data, createdAt: new Date() };
        const collectionInstance = collection(DB, collectionName);
        const docRef = await addDoc(collectionInstance, addCreatedAtToData);

        return docRef.id;
    };

    static set = async (
        collectionName: string,
        id: string,
        data: any,
        {
            override,
            isAuthGuard,
            DB = this.db,
        }: ISetFirebaseOptions = {}
    ): Promise<void> => {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        const addUpdatedAtToData = { ...data, updatedAt: new Date() };
        if (override) {
            addUpdatedAtToData["createdAt"] = new Date();
        }
        const docRef = doc(DB, collectionName, id);
        await setDoc(docRef, addUpdatedAtToData, { merge: !override });
    };

    static update = async (
        collectionName: string,
        id: string,
        data: any,
        { isAuthGuard, DB = this.db }: Pick<IFirebaseOptions, "isAuthGuard" | 'DB'> = {}
    ): Promise<void> => {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        const addUpdatedAtToData = { ...data, updatedAt: new Date() };
        const docRef = doc(DB, collectionName, id);
        await updateDoc(docRef, addUpdatedAtToData);
    };

    static delete = async (
        collectionName: string,
        id: string,
        { isAuthGuard, DB = this.db }: Pick<IFirebaseOptions, "isAuthGuard" | 'DB'> = {}
    ): Promise<void> => {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        const docRef = doc(DB, collectionName, id);
        await deleteDoc(docRef);
    };

    static deleteWhere = async (
        collectionName: string,
        {
            where,
            mixedWhere,
            isAuthGuard,
            DB = this.db,
        }: Pick<IFirebaseOptions, "where" | "mixedWhere" | "isAuthGuard" | 'DB'> = {}
    ): Promise<void> => {
        if (!DB) {
            throw FireBaseErrorsConstants.DB_NOT_INITIALIZED;
        }

        if (isAuthGuard) {
            this.checkAuth();
        }

        let constrains = handelFindConstrains({ where, mixedWhere });

        const collectionInstance = collection(DB, collectionName);
        const q = query(collectionInstance, ...constrains);
        const querySnapshot = await getDocs(q);

        querySnapshot.docs.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
    };
}
