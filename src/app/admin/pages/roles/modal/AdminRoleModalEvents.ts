import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminRolesRepo } from "../repo/AdminRolesRepo"
import {  showNotification } from "src/common/components/ShowNotificationComponent"
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
                    return {
                        data: prevState.data?.filter((role) => role.id !== selectedRole.id)
                    }
                })
            },
            onError() {
                showNotification('Something went wrong', 'error')
            }
        }
    })

    return {
        click: () => mutate()
    }
}