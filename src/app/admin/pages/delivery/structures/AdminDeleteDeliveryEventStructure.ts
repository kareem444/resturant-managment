import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminDeliveryRepo } from "../repo/AdminDeliveryRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteDeliveryModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedDelivery } = useEchoState<IAdminDeliveryModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminDeliveryModel>('delivery')

    const { mutate } = useMutate({
        queryFn: () => AdminDeliveryRepo.deleteDelivery(selectedDelivery.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedDelivery)
                showNotification('Delivery deleted successfully')
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