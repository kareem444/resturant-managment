import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'
import { IComboOfferProduct } from '../interfaces/AdminComboOfferInterface'

export default function AdminProductSideBordersSlice() {
    const { state, removeComboOfferProduct, removeComboOfferAllProducts } =
        useComboOfferUiReducer()

    return (
        <>
            <AdminItemsBoxComponent
                title='Product'
                items={state.products}
                selector={(item: IComboOfferProduct) =>
                    `${item.product.name} - ${item.size} - Rs.${item.price}`
                }
                onDeleteAll={() => removeComboOfferAllProducts()}
                onDeleteItem={(item: any, index) => removeComboOfferProduct(index)}
            />
        </>
    )
}
