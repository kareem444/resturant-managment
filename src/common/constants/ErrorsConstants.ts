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

    static readonly ROLES_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'ROLES_NOT_EXIST',
        message: 'Roles not exist',
        status: 400
    }

    static readonly BRANCH_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'BRANCH_NOT_EXIST',
        message: 'Branch not exist',
        status: 400
    }

    static readonly MEMBER_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'MEMBER_NOT_EXIST',
        message: 'Member not exist',
        status: 400
    }

    static readonly ROLE_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'ROLE_NOT_EXIST',
        message: 'Role not exist',
        status: 400
    }

    static readonly EXPENSES_DESTINATION_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'EXPENSES_DESTINATION_NOT_EXIST',
        message: 'Expenses destination not exist',
        status: 400
    }

    static readonly PAYMENT_METHOD_NOT_EXIST: IServerDataHandlerErrorProperties = {
        code: 'PAYMENT_METHOD_NOT_EXIST',
        message: 'Payment method not exist',
        status: 400
    }
}