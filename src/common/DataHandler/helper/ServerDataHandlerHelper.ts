import { IServerDataHandlerErrorProperties } from "../redux/server/ServerDataHandlerReduxInterface"

export const AsyncHelper = {
    createPromise: async <T>(
        fnToPromise: () => Promise<T>,
        fnToReject: (error: any) => IServerDataHandlerErrorProperties
    ): Promise<T> => {
        try {
            return await fnToPromise()
        } catch (error) {
            throw fnToReject(error)
        }
    }
}