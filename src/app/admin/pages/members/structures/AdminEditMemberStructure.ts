import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminMembersInputsStructure } from './AdminMembersInputsStructure'
import { IAdminMemberInputs } from '../interfaces/AdminMembersInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { IAdminMemberModel } from 'src/app/admin/models/AdminMemberModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminMembersRepo } from '../repo/AdminMembersRepo'
import { showNotification } from 'src/common/components/ShowNotificationComponent'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const AdminEditMemberStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { state: selectedMember } = useEchoState<IAdminMemberModel>(
            EchoStateConstants.selectedItem
        )
        const { closeModal } = useModalReducer()
        const { state: pickedBranch } = useEchoState<IAdminMemberModel>(
            EchoStateConstants.pickedBranch,
            undefined,
            selectedMember?.branch as any,
            true
        )
        const { state: pickedRole } = useEchoState<IAdminRoleModel>(
            EchoStateConstants.pickedRole,
            undefined,
            selectedMember?.role as any,
            true
        )
        const { updateOperation } = useCrudHandler<IAdminMemberModel>('members')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminMembersRepo.updateMember(selectedMember?.id!, data),
            options: {
                onSuccess(_, param: IAdminMemberModel) {
                    updateOperation({ ...selectedMember, ...param })
                    showNotification('Branch updated successfully')
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(formattedError?.message ?? 'Something went wrong', 'error')
                },
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
                    name: pickedRole?.name || '',
                    roleType: pickedRole?.role || ''
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
            text: translate(TRANSLATE.EDIT),
            icon: 'fi-rr-pencil',
            isLoading
        }

        const defaultValues: IAdminMemberInputs = {
            name: selectedMember?.name || '',
            password: selectedMember?.password || '',
            email: selectedMember?.email || '',
            mobile: selectedMember?.mobile || '',
            residentialNumber: selectedMember?.residentialNumber || '',
            healthCertificate: selectedMember?.healthCertificate || ''
        }

        return {
            inputs: AdminMembersInputsStructure(true),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
