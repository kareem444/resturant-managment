import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminAdditionsRepo } from "../repo/AdminAdditionsRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteAdditionsModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedAdditions } = useEchoState<IAdminAdditionsModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminAdditionsModel>('additions')

    const { mutate } = useMutate({
        queryFn: () => AdminAdditionsRepo.deleteAdditions(selectedAdditions.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedAdditions)
                showNotification('Additions deleted successfully')
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