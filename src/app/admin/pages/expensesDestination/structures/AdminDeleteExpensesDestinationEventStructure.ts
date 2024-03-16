import { IAdminExpensesDestinationModel } from 'src/app/admin/models/AdminExpensesDestinationModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminExpensesDestinationsRepo } from '../repo/AdminExpensesDestinationsRepo'
import { showNotification } from 'src/common/components/ShowNotificationComponent'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const OnDeleteExpensesDestinationModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedExpensesDestination } = useEchoState<IAdminExpensesDestinationModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminExpensesDestinationModel>('expensesDestinations')

    const { mutate } = useMutate({
        queryFn: () => AdminExpensesDestinationsRepo.deleteExpensesDestination(selectedExpensesDestination.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedExpensesDestination)
                showNotification('ExpensesDestination deleted successfully')
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