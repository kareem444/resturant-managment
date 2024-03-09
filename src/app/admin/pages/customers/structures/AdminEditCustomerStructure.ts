import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminCustomerInputsStructure } from "./AdminCustomerInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminCustomerInputs } from "../interfaces/AdminCustomersInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditCustomerStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedCustomer } = useEchoState<IAdminCustomerModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminCustomerModel>('customers')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminCustomersRepo.updateCustomer(selectedCustomer?.id!, data),
        options: {
            onSuccess(_, param: IAdminCustomerInputs) {
                updateOperation({ ...selectedCustomer, ...param })
                showNotification('Customer updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminCustomerInputs) => mutate(data)

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminCustomerInputs = {
        name: selectedCustomer?.name || '',
        mobile: selectedCustomer?.mobile || '',
        address: selectedCustomer?.address || '',
        taxNumber: selectedCustomer?.taxNumber || '',
    }

    return {
        inputs: AdminCustomerInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}