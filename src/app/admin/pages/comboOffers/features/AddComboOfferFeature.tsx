import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddComboOfferFeatureFormStructure } from '../structure/AdminAddComboOfferStructure'
import AdminAddComboOfferProductSlice from '../slices/AdminAddComboOfferProductSlice'
import AdminProductSideBordersSlice from '../slices/AdminProductSideBordersSlice'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'
import { IComboOfferProduct } from '../interfaces/AdminComboOfferInterface'

export default function AddComboOfferFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()
    const { state, addComboOfferProduct } = useComboOfferUiReducer()

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminAddComboOfferFeatureFormStructure()}
                    child={
                        <AdminAddComboOfferProductSlice
                            onSubmit={(val: IComboOfferProduct) => addComboOfferProduct(val)}
                        />
                    }
                />
                <div className='w-1/4 flex flex-col gap-5'>
                    <AdminProductSideBordersSlice />
                </div>
            </div>
        </CollapseComponent>
    )
}
