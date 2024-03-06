import { AsyncHelper } from "../DataHandler/helper/ServerDataHandlerHelper";
import { initDynamicDB } from "./FirebaseDynamicDbInit";

export const appInit = async () => {
    AsyncHelper.createPromise(
        async () => {
            await initDynamicDB();
        },
        (e) => {
            console.error(e);
            return e;
        }
    );
};
