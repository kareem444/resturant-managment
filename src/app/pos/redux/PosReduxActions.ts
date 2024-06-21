import { IPosData } from '../interfaces'
import { IPosAppState, IPosState } from './PosReduxInterface'
import { PosInitialState } from './PosReduxState'

export const setApp = (
    state: IPosState,
    action: {
        payload: Partial<IPosAppState>
        type: string
    }
) => {
    const app = action.payload

    Object.keys(app).forEach((key) => {
        if (key in state.app) {
            (state.app as any)[key] = app[key as keyof IPosAppState]
        }
    })
}

export const setData = (
    state: IPosState,
    action: {
        payload: Partial<IPosData>
        type: string
    }
) => {
    const data = action.payload

    Object.keys(data).forEach((key) => {
        if (key in state.data) {
            (state.data as any)[key] = data[key as keyof IPosData]
        }
    })
}

export const clearData = (
    state: IPosState,
    action: {
        type: string
    }
) => {
    state.data = PosInitialState.data
}