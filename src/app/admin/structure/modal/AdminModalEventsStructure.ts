import { OnDeleteBranchModalDeleteEvent } from '../../pages/branches/structures/AdminDeleteBranchEventStructure'
import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteMemberModalDeleteEvent } from '../../pages/members/modal/AdminMemberModalEvents'
import { OnDeleteUnitModalDeleteEvent } from '../../pages/units/structures/AdminDeleteUnitEventStructure'

import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'
import { OnDeleteRoleModalDeleteEvent } from '../../pages/roles/modal/AdminRoleModalEvents'
import { OnDeleteGroupModalDeleteEvent } from '../../pages/groups/structures/AdminDeleteGroupEventStructure'
import { OnDeleteCustomerModalDeleteEvent } from '../../pages/customers/structures/AdminDeleteCustomerEventStructure'

export const AdminModalEventsStructure = {
    onEditProductModalClose: OnEditProductModalCloseEvent,
    onDeleteProductModalDelete: OnDeleteProductModalDeleteEvent,
    onEditComboOfferModalClose: OnEditComboOfferModalCloseEvent,
    onDeleteBranchModalDelete: OnDeleteBranchModalDeleteEvent,
    onDeleteRoleModalDelete: OnDeleteRoleModalDeleteEvent,
    onDeleteMemberModalDelete: OnDeleteMemberModalDeleteEvent,
    onDeleteUnitModalDelete: OnDeleteUnitModalDeleteEvent,
    onDeleteGroupModalDelete: OnDeleteGroupModalDeleteEvent,
    onDeleteCustomerModalDelete: OnDeleteCustomerModalDeleteEvent,

}
