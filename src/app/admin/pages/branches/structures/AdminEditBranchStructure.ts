import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminBranchInputsStructure } from "./AdminBranchInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminBranchInputs } from "../interfaces/AdminBranchesInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminBranchesRepo } from "../repo/AdminBranchesRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditBranchStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedBranch } = useEchoState<IAdminBranchModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminBranchModel>('branches')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminBranchesRepo.updateBranch(selectedBranch?.id!, data),
        options: {
            onSuccess(_, param: IAdminBranchInputs) {
                updateOperation({ ...selectedBranch, ...param })
                showNotification('Branch updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminBranchInputs) => mutate(data)

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