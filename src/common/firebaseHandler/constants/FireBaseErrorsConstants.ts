export class FireBaseErrorsConstants {
    static DB_NOT_INITIALIZED = {
        message: 'DB not initialized',
        code: 'DB_NOT_INITIALIZED',
        status: 500
    }

    static NOT_AUTHENTICATED = {
        message: 'Not Authenticated',
        code: 'NOT_AUTHENTICATED',
        status: 401
    }

    static INVALID_EMAIL = {
        message: 'This email is not valid',
        code: 'INVALID_EMAIL',
        status: 400
    }
}