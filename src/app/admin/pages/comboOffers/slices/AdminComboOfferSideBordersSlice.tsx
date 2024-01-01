import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'
import { IComboOfferProduct } from '../interfaces/AdminComboOfferInterface'
import { FC } from 'react'

interface IProps {
    isEditModal?: boolean
}

const AdminComboOfferSideBordersSlice: FC<IProps> = ({ isEditModal = false }) => {
    const {
        state,
        removeComboOfferProductToAdd,
        removeComboOfferAllProductsToAdd,
        removeComboOfferProductToEdit,
        removeComboOfferAllProductsToEdit
    } = useComboOfferUiReducer()

    return (
        <>
            <AdminItemsBoxComponent
                title='Product'
                items={isEditModal ? state.productsToEdit : state.productsToAdd}
                selector={(item: IComboOfferProduct) =>
                    `${item.product.name} - ${item.size} - Rs.${item.price}`
                }
                onDeleteAll={() =>
                    isEditModal
                        ? removeComboOfferAllProductsToEdit()
                        : removeComboOfferAllProductsToAdd()
                }
                onDeleteItem={(item: any, index) =>
                    isEditModal
                        ? removeComboOfferProductToEdit(index)
                        : removeComboOfferProductToAdd(index)
                }
            />
        </>
    )
}

export default AdminComboOfferSideBordersSlice
