import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    APP_INFO_LOCAL_DB_COLLECTIONS_IDS,
    AppInfoLocalDB,
} from "../config/localDBConfig";
import { EchoStateConstants } from "../constants/EchoStateConstants";
import { setClientDataAction } from "../DataHandler/redux/client/ClientDataHandlerSlice";

export const initCurrentUser = async (dispatch: Dispatch<AnyAction>) => {
    const currentUser = await AppInfoLocalDB.getOneById(
        APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
        APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER
    );

    if (currentUser) {
        dispatch(setClientDataAction({ key: EchoStateConstants.currentUser, data: currentUser, }));
    }
};
