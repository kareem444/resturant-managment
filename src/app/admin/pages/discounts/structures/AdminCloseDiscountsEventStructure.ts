import useDiscountUiReducer from "../redux/useDiscountUiReducer"

export const OnDiscountModalCloseEvent = (): { click: () => void } => {
    const { resetAllDiscountUi } = useDiscountUiReducer()
    return {
        click: () => {
            resetAllDiscountUi()
        }
    }
}