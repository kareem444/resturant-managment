import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddProductFeatureFormStructure } from '../structure/AdminAddProductStructure'
import AdminAddSizeToProductSlice from '../slices/AdminAddSizeToProductSlice'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import AdminProductSideBordersSlice from '../slices/AdminProductSideBordersSlice'

export default function AddProductFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    const { state, addProductSize } = useProductUiReducer()

    const isMultiSizeProduct = state.productType === 'multi'
    const showProductTaxesBorder = state.data?.productTaxes?.length
    const showProductAdditionsBorder = state.data?.productAdditions?.length

    const showSizedBorders = (isMultiSizeProduct || showProductTaxesBorder || showProductAdditionsBorder)

    const handelAddProductSize = (val: { size: string; price: string }) => {
        addProductSize(val)
    }

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminAddProductFeatureFormStructure()}
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
        </CollapseComponent>
    )
}
