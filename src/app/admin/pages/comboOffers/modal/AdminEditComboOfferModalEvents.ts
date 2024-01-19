import useComboOfferUiReducer from "../redux/ui/useComboOfferUiReducer"

export const OnEditComboOfferModalCloseEvent = (): { click: () => void } => {
    const { removeComboOfferAllProductsToEdit } = useComboOfferUiReducer()
    return {
        click: () => {
            removeComboOfferAllProductsToEdit()
        },
    }
}