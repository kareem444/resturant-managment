import useProductUiReducer from '../redux/ui/useProductUiReducer'

export const OnEditProductModalCloseEvent = (): { click: () => void } => {
    const { resetProduct } = useProductUiReducer()
    return {
        click: () => {
            resetProduct()
        }
    }
}

export const OnDeleteProductModalDeleteEvent = (): {
    click: () => void
} => {
    return {
        click: () => {
            console.log('OnDeleteProductModalDeleteEvent')
        }
    }
}
