import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { AdminAddTableFeatureFormStructure } from '../structures/AdminAddTableStructure'

export default function AddTableFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <CollapseComponent title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}>
            <FormComponent {...AdminAddTableFeatureFormStructure()} />
        </CollapseComponent>
    )
}
