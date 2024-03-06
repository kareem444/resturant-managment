import { OnDeleteBranchModalDeleteEvent } from '../../pages/branches/structures/AdminDeleteBranchEventStructure'
import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteMemberModalDeleteEvent } from '../../pages/members/modal/AdminMemberModalEvents'
import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'
import { OnDeleteRoleModalDeleteEvent } from '../../pages/roles/modal/AdminRoleModalEvents'

export const AdminModalEventsStructure = {
    onEditProductModalClose: OnEditProductModalCloseEvent,
    onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
    onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
    onDeleteBranchModalDelete: OnDeleteBranchModalDeleteEvent,
    onDeleteRoleModalDelete: OnDeleteRoleModalDeleteEvent,
    onDeleteMemberModalDelete: OnDeleteMemberModalDeleteEvent
}
