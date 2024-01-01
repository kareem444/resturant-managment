import FormComponent from 'src/common/components/FormComponent'
import { AdminEditProductModalFormStructure } from '../structure/AdminEditProductStructure'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import AdminProductSideBordersSlice from '../slices/AdminProductSideBordersSlice'
import AdminAddSizeToProductSlice from '../slices/AdminAddSizeToProductSlice'

const AdminEditProductModal = () => {
    const { state, addProductSize } = useProductUiReducer()

    const isMultiSizeProduct = state.productType === 'multi'
    const showProductTaxesBorder = state.data?.productTaxes?.length
    const showProductAdditionsBorder = state.data?.productAdditions?.length

    const showSizedBorders =
        isMultiSizeProduct || showProductTaxesBorder || showProductAdditionsBorder

    const handelAddProductSize = (val: { size: string; price: string }) => {
        addProductSize(val)
    }

    return (
        <>
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminEditProductModalFormStructure()}
                    child={
                        isMultiSizeProduct ? (
                            <AdminAddSizeToProductSlice onSubmit={handelAddProductSize} />
                        ) : undefined
                    }
                />
                {!!showSizedBorders && (
                    <div className='w-1/4 flex flex-col gap-5'>
                        <AdminProductSideBordersSlice />
                    </div>
                )}
            </div>
        </>
    )
}

export default AdminEditProductModal
