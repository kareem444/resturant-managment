import { OnDeleteBranchModalDeleteEvent } from '../../pages/branches/structures/AdminDeleteBranchEventStructure'
import { OnEditComboOfferModalCloseEvent } from '../../pages/comboOffers/modal/AdminEditComboOfferModalEvents'
import { OnDeleteMemberModalDeleteEvent } from '../../pages/members/structures/AdminDeleteMemberEventStructure'
import {
    OnDeleteProductModalDeleteEvent,
    OnEditProductModalCloseEvent
} from '../../pages/products/modal/AdminEditProductModalEvents'
import OnDeleteRoleModalDeleteEvent from '../../pages/roles/structures/AdminDeleteRoleEventStructure'
import { OnDeleteUnitModalDeleteEvent } from '../../pages/units/structures/AdminDeleteUnitEventStructure'
import { OnDeleteGroupModalDeleteEvent } from '../../pages/groups/structures/AdminDeleteGroupEventStructure'
import { OnDeleteCustomerModalDeleteEvent } from '../../pages/customers/structures/AdminDeleteCustomerEventStructure'
import { OnDeleteSupplierModalDeleteEvent } from '../../pages/suppliers/structures/AdminDeleteSupplierEventStructure'
import { OnDeleteExpensesDestinationModalDeleteEvent } from '../../pages/expensesDestination/structures/AdminDeleteExpensesDestinationEventStructure'

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
    onDeleteSupplierModalDelete: OnDeleteSupplierModalDeleteEvent,
    onDeleteExpensesDestinationModalDelete: OnDeleteExpensesDestinationModalDeleteEvent,
}
