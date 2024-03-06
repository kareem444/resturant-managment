import { IServerDataHandlerErrorProperties } from "../DataHandler/redux/server/ServerDataHandlerReduxInterface";

export class ErrorsConstants {
    static readonly SOMETHING_WENT_WRONG: IServerDataHandlerErrorProperties = {
        code: 'SOMETHING_WENT_WRONG',
        message: 'Something went wrong',
        status: 500
    }

    static readonly INCORRECT_PASSWORD: IServerDataHandlerErrorProperties = {
        code: 'INCORRECT_PASSWORD',
        message: 'Incorrect password',
        status: 400
    }

    static readonly USER_NOT_FOUND: IServerDataHandlerErrorProperties = {
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 400
    }

    static readonly USER_ALREADY_EXIST: IServerDataHandlerErrorProperties = {
        code: 'USER_ALREADY_EXIST',
        message: 'User already exist',
        status: 400
    }

    static readonly REQUEST_ALREADY_EXIST: IServerDataHandlerErrorProperties = {
        code: 'REQUEST_ALREADY_EXIST',
        message: 'This request is already exist',
        status: 400
    }
}