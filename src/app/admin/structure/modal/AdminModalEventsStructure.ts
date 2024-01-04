import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'

export const AdminModalEventsStructure = {
    onEditProductModalClose: OnEditProductModalCloseEvent,
    onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
    onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
}
