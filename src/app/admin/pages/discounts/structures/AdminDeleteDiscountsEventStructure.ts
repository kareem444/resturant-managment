import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import { AdminDiscountsRepo } from "../repo/AdminDiscountsRepo"
import useCrudHandler from "src/common/hooks/useCrudHandler"
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal"

export const OnDeleteDiscountsModalDeleteEvent = (): {
    click: () => void
} => {
    const { state: selectedDiscount } = useEchoState<IAdminDiscountModel>(EchoStateConstants.selectedItem)
    const { deleteOperation } = useCrudHandler<IAdminDiscountModel>('discounts')

    const { mutate } = useMutate({
        queryFn: () => AdminDiscountsRepo.deleteDiscounts(selectedDiscount.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedDiscount)
                showNotification('Discount deleted successfully')
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