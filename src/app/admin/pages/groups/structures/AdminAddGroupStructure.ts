import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminGroupInputsStructure } from './AdminGroupInputsStructure'
import { IAdminGroupInputs } from '../interfaces/AdminGroupsInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminGroupsRepo } from '../repo/AdminGroupsRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { IAdminGroupModel } from 'src/app/admin/models/AdminGroupModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'
//
export const AdminAddGroupStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminGroupModel>('groups')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminGroupsRepo.createGroup(data),
            options: {
                onSuccess(id, param: IAdminGroupInputs) {
                    createOperation({ ...param, id })
                    showNotification('Group added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminGroupInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminGroupInputs = {
            name: ''
        }

        return {
            inputs: AdminGroupInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
