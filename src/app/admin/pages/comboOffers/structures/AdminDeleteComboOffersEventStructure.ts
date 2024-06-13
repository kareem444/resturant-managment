import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminComboOffersRepo } from "../repo/AdminComboOffersRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteComboOffersModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedComboOffers } = useEchoState<IAdminComboOffersModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminComboOffersModel>('comboOffers')

    const { mutate } = useMutate({
        queryFn: () => AdminComboOffersRepo.deleteComboOffers(selectedComboOffers.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedComboOffers)
                showNotification('ComboOffers deleted successfully')
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