import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './modal/ModalSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import NotificationReducer from './notification/NotificationSlice'
import RightDrawerReducer from './rightDrawer/RightDrawerSlice'

const combinedReducer = {
    modal: ModalReducer,
    notification: NotificationReducer,
    rightDrawer: RightDrawerReducer,
}

export const store = configureStore({
    reducer: combinedReducer
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
