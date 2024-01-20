import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { NOTIFICATION_TYPE, showNotification } from "src/common/components/ShowNotificationComponent"
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminMembersRepo } from "../repo/AdminMembersRepo"

export const OnDeleteMemberModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedMember } = useEchoState<IAdminMemberModel>(EchoStateConstants.selectedItem)
    const { state: allMembers, setState } = useAsyncState<IAdminMemberModel[]>(AsyncStateConstants.members)

    const { mutate } = useMutate({
        queryFn: () => AdminMembersRepo.deleteMember(selectedMember.id!),
        options: {
            onSuccess() {
                setState({
                    data: allMembers?.data?.filter((member) => member.id !== selectedMember.id),
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