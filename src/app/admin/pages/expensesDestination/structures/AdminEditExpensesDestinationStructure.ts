import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminExpensesDestinationInputsStructure } from "./AdminExpensesDestinationInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminExpensesDestinationModel } from "src/app/admin/models/AdminExpensesDestinationModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminExpensesDestinationInputs } from "../interfaces/AdminExpensesDestinationsInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminExpensesDestinationsRepo } from "../repo/AdminExpensesDestinationsRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditExpensesDestinationStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedExpensesDestination } = useEchoState<IAdminExpensesDestinationModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminExpensesDestinationModel>('expensesDestinations')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminExpensesDestinationsRepo.updateExpensesDestination(selectedExpensesDestination?.id!, data),
        options: {
            onSuccess(_, param: IAdminExpensesDestinationInputs) {
                updateOperation({ ...selectedExpensesDestination, ...param })
                showNotification('ExpensesDestination updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminExpensesDestinationInputs) => mutate(data)

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminExpensesDestinationInputs = {
        name: selectedExpensesDestination?.name || '',
    }

    return {
        inputs: AdminExpensesDestinationInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}