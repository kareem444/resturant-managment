import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useAsyncState from 'src/common/DataHandler/hooks/server/useAsyncState'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminBranchesRepo } from '../repo/AdminBranchesRepo'
import { NOTIFICATION_TYPE, showNotification } from 'src/common/components/ShowNotificationComponent'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'

export const OnDeleteBranchModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedBranch } = useEchoState<IAdminBranchModel>(EchoStateConstants.selectedItem)
    const { state: allBranches, setState } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches)

    const { mutate } = useMutate({
        queryFn: () => AdminBranchesRepo.deleteBranch(selectedBranch.id!),
        options: {
            onSuccess() {
                setState({
                    data: allBranches?.data?.filter((branch) => branch.id !== selectedBranch.id),
                })
            },
            onError() {
                showNotification(NOTIFICATION_TYPE.ERROR, 'Something went wrong')
            }
        }
    })

    return {
        click: () => mutate()
    }
}
