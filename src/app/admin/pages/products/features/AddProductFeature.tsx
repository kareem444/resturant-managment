import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddProductFeatureFormStructure } from '../structure/AdminAddProductStructure'
import AdminAddSizeToProductComponent from '../components/AdminAddSizeToProductComponent'

export default function AddProductFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <FormComponent
                {...AdminAddProductFeatureFormStructure()}
                child={<AdminAddSizeToProductComponent />}
            />
        </CollapseComponent>
    )
}
