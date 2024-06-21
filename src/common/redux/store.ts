import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './modal/ModalSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import RightDrawerReducer from './rightDrawer/RightDrawerSlice'
import { adminReducer } from 'src/app/admin/redux/store'
import { DataHandlerReducersStore } from '../DataHandler/redux/DataHandlerReducersStore'
import PosReducer from 'src/app/pos/redux/PosReduxSlice'

const combinedReducer = {
    ...adminReducer,
    ...DataHandlerReducersStore,
    modal: ModalReducer,
    rightDrawer: RightDrawerReducer,
    pos: PosReducer
}

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
