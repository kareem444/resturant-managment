import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminTaxesRepo } from "../repo/AdminTaxesRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteTaxModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedTax } = useEchoState<IAdminTaxModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminTaxModel>('taxes')

    const { mutate } = useMutate({
        queryFn: () => AdminTaxesRepo.deleteTax(selectedTax.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedTax)
                showNotification('Tax deleted successfully')
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