import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminBranchInputsStructure } from './AdminBranchInputsStructure'
import { IAdminBranchInputs } from '../interfaces/AdminBranchesInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminBranchesRepo } from '../repo/AdminBranchesRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const AdminAddBranchStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminBranchModel>('branches')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminBranchesRepo.createBranch(data),
            options: {
                onSuccess(id, param: IAdminBranchInputs) {
                    createOperation({ ...param, id })
                    showNotification('Branch added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminBranchInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminBranchInputs = {
            name: '',
            mobile: '',
            address: '',
            startTime: '',
            endTime: '',
            branchCode: '',
        }

        return {
            inputs: AdminBranchInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
