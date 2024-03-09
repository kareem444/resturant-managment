import { Dispatch } from "react";
import { AsyncHelper } from "../DataHandler/helper/ServerDataHandlerHelper";
import { initFireStoreDynamicDB } from "./InitFireStoreDynamicDB";
import { AnyAction } from "@reduxjs/toolkit";
import { initCurrentUser } from "./InitCurrentUser";

export const appInit = async (dispatch: Dispatch<AnyAction>) => {
    AsyncHelper.createPromise(
        async () => {
            await initFireStoreDynamicDB();
            await initCurrentUser(dispatch);
        },
        (e) => {
            console.error(e);
            return e;
        }
    );
};
