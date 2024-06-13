import useProductUiReducer from "../redux/useProductUiReducer"

export const OnEditProductModalCloseEvent = (): { click: () => void } => {
    const { resetProduct } = useProductUiReducer()
    return {
        click: () => {
            resetProduct()
        }
    }
}