import useComboOfferUiReducer from "../redux/ui/useComboOfferUiReducer"

export const OnEditComboOfferModalCloseEvent = (): { close: () => void } => {
    const { removeComboOfferAllProductsToEdit } = useComboOfferUiReducer()
    return {
        close: () => {
            removeComboOfferAllProductsToEdit()
        },
    }
}