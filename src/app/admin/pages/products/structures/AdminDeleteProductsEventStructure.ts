import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminProductsRepo } from "../repo/AdminProductsRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const OnDeleteProductsModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedProducts } = useEchoState<IAdminProductsModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminProductsModel>('products')

    const { mutate } = useMutate({
        queryFn: () => AdminProductsRepo.deleteProducts(selectedProducts.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedProducts)
                showNotification('Products deleted successfully')
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