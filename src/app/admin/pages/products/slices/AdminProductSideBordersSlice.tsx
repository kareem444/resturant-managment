import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent'
import useProductUiReducer from '../redux/ui/useProductUiReducer'

export default function AdminProductSideBordersSlice() {
    const {
        state,
        removeProductSize,
        removeAllProductSize,
        removeProductTax,
        removeAllProductTaxes,
        removeProductAddition,
        removeAllProductAdditions
    } = useProductUiReducer()

    const showProductSizesBorder = state.productType === 'multi'
    const showProductTaxesBorder = state.data?.productTaxes?.length
    const showProductAdditionsBorder = state.data?.productAdditions?.length

    return (
        <>
            {!!showProductSizesBorder && (
                <AdminItemsBoxComponent
                    title='Sizes'
                    items={state.data?.productSizes}
                    selector={(item: { size: string; price: string }) =>
                        `${item.size} - Rs.${item.price}`
                    }
                    onDeleteAll={() => removeAllProductSize()}
                    onDeleteItem={(item: any, index) => removeProductSize({ index })}
                />
            )}

            {!!showProductAdditionsBorder && (
                <AdminItemsBoxComponent
                    title='Additions'
                    items={state.data?.productAdditions}
                    selector={(item: { id: string; name: string }) => `${item.name}`}
                    onDeleteAll={() => removeAllProductAdditions()}
                    onDeleteItem={(item: any, index) => removeProductAddition({ index })}
                />
            )}

            {!!showProductTaxesBorder && (
                <AdminItemsBoxComponent
                    title='Taxes'
                    items={state.data?.productTaxes}
                    selector={(item: { id: string; name: string }) => `${item.name}`}
                    onDeleteAll={() => removeAllProductTaxes()}
                    onDeleteItem={(item: any, index) => removeProductTax({ index })}
                />
            )}

        </>
    )
}
