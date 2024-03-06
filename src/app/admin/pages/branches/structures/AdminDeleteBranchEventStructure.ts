import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminBranchesRepo } from '../repo/AdminBranchesRepo'
import { showNotification } from 'src/common/components/ShowNotificationComponent'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const OnDeleteBranchModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedBranch } = useEchoState<IAdminBranchModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminBranchModel>('branches')

    const { mutate } = useMutate({
        queryFn: () => AdminBranchesRepo.deleteBranch(selectedBranch.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedBranch)
                showNotification('Branch deleted successfully')
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