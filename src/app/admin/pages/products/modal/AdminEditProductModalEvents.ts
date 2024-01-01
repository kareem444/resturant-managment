import useProductUiReducer from '../redux/ui/useProductUiReducer'

export const OnEditProductModalCloseEvent = (): { close: () => void } => {
    const { resetProduct } = useProductUiReducer()
    return {
        close: () => {
            resetProduct()
        },
    }
}

export const OnDeleteProductModalDeleteEvent = (): void => {
    console.log('OnDeleteProductModalDeleteEvent');
}