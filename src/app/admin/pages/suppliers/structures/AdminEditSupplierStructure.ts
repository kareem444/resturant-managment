import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminSupplierInputsStructure } from "./AdminSupplierInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminSupplierInputs } from "../interfaces/AdminSupplierInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminSuppliersRepo } from "../repo/AdminSupplierRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditSupplierStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedSupplier } = useEchoState<IAdminSupplierModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminSupplierModel>('suppliers')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminSuppliersRepo.updateSupplier(selectedSupplier?.id!, data),
        options: {
            onSuccess(_, param: IAdminSupplierInputs) {
                updateOperation({ ...selectedSupplier, ...param })
                showNotification('Supplier updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminSupplierInputs) => mutate(data)

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminSupplierInputs = {
        name: selectedSupplier?.name || '',
        address: selectedSupplier?.address || '',
        phone: selectedSupplier?.phone || '',
        taxNumber: selectedSupplier?.taxNumber || ''
    }

    return {
        inputs: AdminSupplierInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}