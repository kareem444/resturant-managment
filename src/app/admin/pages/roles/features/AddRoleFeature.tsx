import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import AdminRolesComponents from '../components/AdminRolesComponents'
import { AdminAddRoleFeatureFormStructure } from '../structures/AdminAddRolesStructure'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { iRoleTypes } from '../interfaces/AdminRoleInterface'

export default function AddRoleFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    const { state: roleType, setState: setIsAdminRole } =
        useEchoState<iRoleTypes>(
            EchoStateConstants.selectedRoleType,
            'dashboardAndPos'
        )

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <FormComponent
                {...AdminAddRoleFeatureFormStructure(setIsAdminRole)}
                child={<AdminRolesComponents selectedRoleType={roleType} />}
            />
        </CollapseComponent>
    )
}
