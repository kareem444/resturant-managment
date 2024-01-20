import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminMembersInputsItemsStructure } from './AdminMembersInputsStructure'
import { IAdminMemberInputs } from '../interfaces/AdminMembersInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { IAdminMemberModel } from 'src/app/admin/models/AdminMemberModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import useAsyncState from 'src/common/DataHandler/hooks/server/useAsyncState'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminMembersRepo } from '../repo/AdminMembersRepo'
import { NOTIFICATION_TYPE, showNotification } from 'src/common/components/ShowNotificationComponent'

export const AdminEditMemberModalFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { state: selectedMember } = useEchoState<IAdminMemberModel>(
            EchoStateConstants.selectedItem
        )
        const { setState } = useAsyncState<IAdminMemberModel[]>(
            AsyncStateConstants.members
        )
        const { closeModal } = useModalReducer()
        const { state: pickedBranch } = useEchoState<IAdminMemberModel>(
            EchoStateConstants.pickedBranch,
            undefined,
            selectedMember?.branch as any,
            true
        )
        const { state: pickedRole } = useEchoState<IAdminMemberModel>(
            EchoStateConstants.pickedRole,
            undefined,
            selectedMember?.role as any,
            true
        )

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminMembersRepo.updateMember(selectedMember?.id!, data),
            options: {
                onSuccess(_, param: IAdminMemberModel) {
                    setState(prevState => {
                        return {
                            data: prevState?.data?.map(item => {
                                if (item.id === selectedMember.id) {
                                    return { ...item, ...param }
                                }
                                return item
                            })
                        }
                    })
                    showNotification(
                        NOTIFICATION_TYPE.SUCCESS,
                        'Branch updated successfully'
                    )
                    closeModal()
                },
                onError(formattedError) {
                    showNotification(NOTIFICATION_TYPE.ERROR, formattedError?.message)
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
                    name: pickedRole?.name || ''
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
            inputs: AdminMembersInputsItemsStructure(true),
            button,
            containerClassName: 'grid-rows-2 grid-flow-col',
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
