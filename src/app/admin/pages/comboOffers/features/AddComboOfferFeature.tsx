import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddComboOfferFeatureFormStructure } from '../structure/AdminAddComboOfferStructure'
import AdminAddComboOfferProductSlice from '../slices/AdminAddComboOfferProductSlice'
import AdminComboOfferSideBordersSlice from '../slices/AdminComboOfferSideBordersSlice'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'
import { IComboOfferProduct } from '../interfaces/AdminComboOfferInterface'

export default function AddComboOfferFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()
    const { addComboOfferProductToAdd } = useComboOfferUiReducer()

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminAddComboOfferFeatureFormStructure()}
                    child={
                        <AdminAddComboOfferProductSlice
                            onSubmit={(val: IComboOfferProduct) => addComboOfferProductToAdd(val)}
                        />
                    }
                />
                <div className='w-1/4 flex flex-col gap-5'>
                    <AdminComboOfferSideBordersSlice />
                </div>
            </div>
        </CollapseComponent>
    )
}
