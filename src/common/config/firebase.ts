import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FireStorageHelper } from "../firebaseHandler/helper/FireStorageHelper";

export class FireBaseConfig {
  private static defaultApp: FirebaseApp = initializeApp({
    apiKey: "AIzaSyCAFIh686DyXHVYjUam9baAZZn9zU_iGcE",
    authDomain: "kareem-d106d.firebaseapp.com",
    projectId: "kareem-d106d",
    storageBucket: "kareem-d106d.appspot.com",
    messagingSenderId: "591180800282",
    appId: "1:591180800282:web:48ad9959bc758c08dbcca3",
    measurementId: "G-VC39SEPC21",
  });

  static defaultDB = getFirestore(this.defaultApp);
  static dynamicApp: FirebaseApp | undefined;
  static fireAuth = getAuth(this.defaultApp);

  static async initDynamicDB(credentials?: FirebaseOptions): Promise<Firestore | undefined> {
    if (credentials) {
      const initDynamicApp = initializeApp(credentials, "dynamic");
      this.dynamicApp = initDynamicApp;
      FireStorageHelper.setDB(initDynamicApp);
      return getFirestore(initDynamicApp);
    }
  }
}
