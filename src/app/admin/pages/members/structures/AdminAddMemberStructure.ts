import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminMembersInputsStructure } from './AdminMembersInputsStructure'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { AdminMembersRepo } from '../repo/AdminMembersRepo'
import { IAdminMemberInputs } from '../interfaces/AdminMembersInterface'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { IAdminMemberModel } from 'src/app/admin/models/AdminMemberModel'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const AdminAddMemberStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminMemberModel>('members')

        const { state: pickedBranch } = useEchoState<IAdminMemberModel>(EchoStateConstants.pickedBranch)
        const { state: pickedRole } = useEchoState<IAdminRoleModel>(EchoStateConstants.pickedRole)

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminMembersRepo.createMember(data),
            options: {
                onSuccess(id, param: IAdminMemberModel) {
                    createOperation({ ...param, id })
                    showNotification('Member added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IDefaultValuesProperties) => {
            const handelData: IAdminMemberModel = {
                branch: {
                    id: pickedBranch?.id || '',
                    name: pickedBranch?.name || ''
                },
                role: {
                    id: pickedRole?.id || '',
                    name: pickedRole?.name,
                    roleType: pickedRole?.role
                },
                name: (data.name as string).trim() || '',
                password: (data.password as string).trim() || '',
                email: (data.email as string).trim() || '',
                mobile: (data.mobile as string).trim() || '',
                residentialNumber: (data.residentialNumber as string).trim() || '',
                healthCertificate: (data.healthCertificate as string).trim() || ''
            }

            mutate(handelData)
        }

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminMemberInputs = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            residentialNumber: '',
            healthCertificate: ''
        }

        return {
            inputs: AdminMembersInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
