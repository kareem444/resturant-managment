import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminBranchInputsStructure } from './AdminBranchInputsStructure'
import { IAdminBranchInputs } from '../interfaces/AdminBranchesInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminBranchesRepo } from '../repo/AdminBranchesRepo'
import {
    NOTIFICATION_TYPE,
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import useAsyncState from 'src/common/DataHandler/hooks/server/useAsyncState'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'

export const AdminAddBranchFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { setState } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches)

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminBranchesRepo.createBranch(data),
            options: {
                onSuccess(id, param: IAdminBranchInputs) {
                    setState(prevState => {
                        return {
                            data: [{ ...param, id }, ...(prevState?.data || [])]
                        }
                    })
                    showNotification(
                        NOTIFICATION_TYPE.SUCCESS,
                        'Branch added successfully'
                    )
                },
                onError(formattedError) {
                    showNotification(NOTIFICATION_TYPE.ERROR, formattedError?.message)
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
            nameAr: '',
            mobile: '',
            address: '',
            startTime: '',
            endTime: '',
            branchCode: '',
            taxNumber: ''
        }

        return {
            inputs: AdminBranchInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
