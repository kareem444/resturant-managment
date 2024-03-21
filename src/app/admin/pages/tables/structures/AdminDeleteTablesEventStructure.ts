import { IAdminTableModel } from "src/app/admin/models/AdminTableModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminTablesRepo } from "../repo/AdminTablesRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteTableModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedTable } = useEchoState<IAdminTableModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminTableModel>('tables')

    const { mutate } = useMutate({
        queryFn: () => AdminTablesRepo.deleteTable(selectedTable.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedTable)
                showNotification('Table deleted successfully')
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