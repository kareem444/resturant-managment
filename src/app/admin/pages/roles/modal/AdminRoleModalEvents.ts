import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminRolesRepo } from "../repo/AdminRolesRepo"
import { NOTIFICATION_TYPE, showNotification } from "src/common/components/ShowNotificationComponent"
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState"
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants"

export const OnDeleteRoleModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedRole } = useEchoState<IAdminRoleModel>(EchoStateConstants.selectedItem)
    const { setState } = useAsyncState<IAdminRoleModel[]>(AsyncStateConstants.roles)

    const { mutate } = useMutate({
        queryFn: () => AdminRolesRepo.deleteRole(selectedRole.id!),
        options: {
            onSuccess() {
                setState(prevState => {
                    console.log(selectedRole.id);
                    console.log(prevState.data);
                    return {
                        data: prevState.data?.filter((role) => role.id !== selectedRole.id)
                    }
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