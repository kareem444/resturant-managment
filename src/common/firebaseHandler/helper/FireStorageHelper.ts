import { FirebaseApp } from "firebase/app";
import {
    FirebaseStorage,
    UploadResult,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { FireBaseErrorsConstants } from "../constants/FireBaseErrorsConstants";

export class FireStorageHelper {
    private static storageDB: FirebaseStorage | undefined = undefined;

    static setDB = (app?: FirebaseApp) => {
        if (app) {
            this.storageDB = getStorage(app);
        }
    };

    private static refactorFileName = (fileName: string): string => {
        return fileName.split(".").slice(0, -1).join("_").split(" ").join("_").split("/").join("_");
    }

    static uploadFile = async (
        file: File,
        {
            fileName,
            directory = "public",
            DB = this.storageDB,
            allowedExtensions = ["jpg", "jpeg", "png", "gif"],
        }: {
            fileName?: string;
            directory?: string;
            DB?: FirebaseStorage;
            allowedExtensions?: string[];
        } = {}
    ): Promise<string> => {
        if (!DB) {
            throw FireBaseErrorsConstants.STORAGE_NOT_INITIALIZED;
        }

        const fileExtension = file.name.split(".").pop();

        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            throw FireBaseErrorsConstants.FILE_TYPE_NOT_ALLOWED;
        }

        if (!fileName) {
            fileName = this.refactorFileName(file.name) + '+' + uuidv4() + "." + fileExtension;
        }

        const storageRef = ref(DB, directory + "/" + fileName);

        const snapshot: UploadResult = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    };
}
