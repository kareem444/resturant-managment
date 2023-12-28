import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import AdminRolesComponents from '../components/AdminRolesComponents'
import { AdminAddRoleFeatureFormStructure } from '../structures/AdminAddRolesStructure'
import { useState } from 'react'

export default function AddRoleFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    const [isAdminRole, setIsAdminRole] = useState<boolean>(true)

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <FormComponent
                {...AdminAddRoleFeatureFormStructure(setIsAdminRole)}
                child={<AdminRolesComponents isAdminRole={isAdminRole} />}
            />
        </CollapseComponent>
    )
}
