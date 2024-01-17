import { IServerDataHandlerErrorProperties } from "../redux/server/ServerDataHandlerReduxInterface"

export const AsyncHelper = {
    createPromise: async <T>(
        fnToPromise: () => Promise<T>,
        fnToReject?: (error: any) => IServerDataHandlerErrorProperties
    ): Promise<T> => {
        try {
            return await fnToPromise()
        } catch (error: any) {
            if (!fnToReject) {
                throw {
                    code: error.code ?? 'UNEXPECTED_ERROR',
                    message: error.message ?? 'Unexpected error',
                    status: error.status ?? 500,
                }
            }
            throw fnToReject(error)
        }
    }
}