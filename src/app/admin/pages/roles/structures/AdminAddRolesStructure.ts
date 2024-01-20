import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminRolesInputsStructure } from './AdminRolesInputsStructure'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { adminRoleDefaultVal, posRolesDefaultVal } from '../constants/AdminRoleDefaultVal'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { AdminRolesRepo } from '../repo/AdminRolesRepo'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import {
    NOTIFICATION_TYPE,
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import useAsyncState from 'src/common/DataHandler/hooks/server/useAsyncState'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { iRoleTypes } from '../interfaces/AdminRoleInterface'

export const AdminAddRoleFeatureFormStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<iRoleTypes>>
): IFormComponentProperties => {
    const { translate } = useTranslate()

    const { state: roles } = useEchoState<any>(EchoStateConstants.selectedRoles)
    const { state: roleType } = useEchoState<iRoleTypes>(EchoStateConstants.selectedRoleType, 'dashboardAndPos')

    const { setState } = useAsyncState<IAdminRoleModel[]>(
        AsyncStateConstants.roles
    )

    const { mutate, isLoading } = useMutate({
        queryFn(param) {
            return AdminRolesRepo.addRole(param)
        },
        options: {
            onSuccess(id, param) {
                setState(prevState => {
                    return {
                        data: [{ ...param, id }, ...(prevState.data || [])]
                    }
                })
                showNotification(NOTIFICATION_TYPE.SUCCESS, 'Role added successfully')
            },
            onError() {
                showNotification(NOTIFICATION_TYPE.ERROR, 'Something went wrong')
            }
        }
    })

    const handelOnSubmit = async (data: IDefaultValuesProperties) => {
        const handelRoles = () => {
            if (roleType === 'dashboardAndPos') {
                return {
                    ...adminRoleDefaultVal,
                    ...roles,
                    reports: { ...adminRoleDefaultVal.reports, ...roles.reports },
                    pos: { ...adminRoleDefaultVal.pos, ...roles.pos }
                }
            } else if (roleType === 'dashboard') {
                return {
                    ...adminRoleDefaultVal,
                    ...roles,
                    reports: { ...adminRoleDefaultVal.reports, ...roles.reports },
                    pos: { ...posRolesDefaultVal, accessPos: false }
                }
            } else {
                return { pos: { ...posRolesDefaultVal, ...roles } }
            }
        }
        let handelData: IAdminRoleModel = {
            name: (data.name as string).trim(),
            role: roleType,
            permissions: handelRoles()
        }
        mutate(handelData)
    }

    const button = {
        text: translate(TRANSLATE.ADD),
        icon: 'fi-rr-plus',
        isLoading
    }

    return {
        inputs: AdminRolesInputsStructure(setIsAdminRole),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: {
            name: '',
            role: 'dashboard'
        }
    }
}
