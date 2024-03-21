import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminExpensesRepo } from "../repo/AdminExpensesRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteExpensesModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedExpenses } = useEchoState<IAdminExpensesModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminExpensesModel>('expenses')

    const { mutate } = useMutate({
        queryFn: () => AdminExpensesRepo.deleteExpenses(selectedExpenses.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedExpenses)
                showNotification('Expenses deleted successfully')
            },
            onError(e) {
                showNotification(e?.code, 'error')
            }
        }
    })

    return {
        click: () => mutate()
    }
}