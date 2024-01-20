import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminBranchInputsStructure } from "./AdminBranchInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminBranchInputs } from "../interfaces/AdminBranchesInterface"
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminBranchesRepo } from "../repo/AdminBranchesRepo"
import { NOTIFICATION_TYPE, showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants"

export const AdminEditBranchModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedBranch } = useEchoState<IAdminBranchModel>(EchoStateConstants.selectedItem)
    const { setState } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches)
    const { closeModal } = useModalReducer()

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminBranchesRepo.updateBranch(selectedBranch?.id!, data),
        options: {
            onSuccess(_, param: IAdminBranchInputs) {
                setState(prevState => {
                    return {
                        data: prevState?.data?.map(item => {
                            if (item.id === selectedBranch.id) {
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

    const handelOnSubmit = (data: IAdminBranchInputs) => {
        const handelData: IAdminBranchModel = {
            name: data.name.trim(),
            nameAr: data.nameAr.trim(),
            mobile: data.mobile.trim(),
            address: data.address.trim(),
            startTime: data.startTime.trim(),
            endTime: data.endTime.trim(),
            branchCode: data.branchCode.trim(),
            taxNumber: data.taxNumber.trim()
        }

        mutate(handelData)
    }

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminBranchInputs = {
        name: selectedBranch?.name || '',
        nameAr: selectedBranch?.nameAr || '',
        mobile: selectedBranch?.mobile || '',
        address: selectedBranch?.address || '',
        startTime: selectedBranch?.startTime || '',
        endTime: selectedBranch?.endTime || '',
        branchCode: selectedBranch?.branchCode || '',
        taxNumber: selectedBranch?.taxNumber || ''
    }

    return {
        inputs: AdminBranchInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}