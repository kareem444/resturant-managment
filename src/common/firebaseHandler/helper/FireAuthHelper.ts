import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { ILocalOrganizationModel } from "src/app/auth/models/local/AuthLocalModel";
import { FireBaseConfig } from "src/common/config/firebase";
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB,
} from "src/common/config/localDBConfig";
import { FireBaseErrorsConstants } from "../constants/FireBaseErrorsConstants";

export class FireAuthHelper {
    private static checkIfValidEmail = (email: string) => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        return emailPattern.test(email);
    };

    static async signUp(email: string, password: string) {
        try {
            const isValidEmail = this.checkIfValidEmail(email);

            if (!isValidEmail) {
                throw FireBaseErrorsConstants.INVALID_EMAIL;
            }

            const userCredential = await createUserWithEmailAndPassword(
                FireBaseConfig.fireAuth,
                email,
                password
            );
            const user = userCredential.user;
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async signIn(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                FireBaseConfig.fireAuth,
                email,
                password
            );
            const user = userCredential.user;
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async signOut() {
        try {
            await signOut(FireBaseConfig.fireAuth);
        } catch (error) {
            throw error;
        }
    }

    static getOrganizationLocalData = async (): Promise<
        ILocalOrganizationModel | undefined
    > => {
        const storedData: ILocalOrganizationModel = await AppInfoLocalDB.getOneById(
            APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
            APP_INFO_LOCAL_DB_COLLECTIONS_IDS.ORGANIZATION
        );

        if (storedData !== undefined) {
            return {
                ...storedData,
                ownerId: storedData.ownerId ?? FireBaseConfig.fireAuth.currentUser?.uid,
            };
        }
    };
}
