import { IAdminUnitModel } from 'src/app/admin/models/AdminUnitModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminUnitsRepo } from '../repo/AdminUnitsRepo'
import { showNotification } from 'src/common/components/ShowNotificationComponent'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const OnDeleteUnitModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedUnit } = useEchoState<IAdminUnitModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminUnitModel>('units')

    const { mutate } = useMutate({
        queryFn: () => AdminUnitsRepo.deleteUnit(selectedUnit.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedUnit)
                showNotification('Unit deleted successfully')
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