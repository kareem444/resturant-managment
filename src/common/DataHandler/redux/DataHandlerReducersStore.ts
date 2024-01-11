import ServerDataHandlerReducer from './server/ServerDataHandlerSlice'
import ClientDataHandlerReducer from './client/ClientDataHandlerSlice'

export const DataHandlerReducersStore = {
    serverDataHandler: ServerDataHandlerReducer,
    clientDataHandler: ClientDataHandlerReducer,
}