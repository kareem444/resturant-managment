import { IAdminGroupModel } from 'src/app/admin/models/AdminGroupModel'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminGroupsRepo } from '../repo/AdminGroupsRepo'
import { showNotification } from 'src/common/components/ShowNotificationComponent'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const OnDeleteGroupModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedGroup } = useEchoState<IAdminGroupModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminGroupModel>('groups')

    const { mutate } = useMutate({
        queryFn: () => AdminGroupsRepo.deleteGroup(selectedGroup.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedGroup)
                showNotification('Group deleted successfully')
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