import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminMembersRepo } from "../repo/AdminMembersRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteMemberModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedMember } = useEchoState<IAdminMemberModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminMemberModel>('members')

    const { mutate } = useMutate({
        queryFn: () => AdminMembersRepo.deleteMember(selectedMember.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedMember)
                showNotification('Member deleted successfully')
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