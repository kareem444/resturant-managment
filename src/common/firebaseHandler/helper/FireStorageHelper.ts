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

export class FireStorageHelper {
    private static storageDB: FirebaseStorage | undefined = undefined;

    static setDB = (app?: FirebaseApp) => {
        if (app) {
            this.storageDB = getStorage(app);
        }
    };

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
            throw "Storage not initialized";
        }

        const fileExtension = file.name.split(".").pop();

        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            throw "File type not allowed";
        }

        if (!fileName) {
            fileName = uuidv4() + "." + fileExtension;
        }

        const storageRef = ref(DB, directory + "/" + fileName);

        const snapshot: UploadResult = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    };
}
