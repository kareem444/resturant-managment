import { ObjectKeys } from 'react-hook-form/dist/types/path/common'
import AdminAddUnitModal from '../../pages/units/modal/AdminAddUnitModal'
import AdminEditUnitModal from '../../pages/units/modal/AdminEditUnitModal'
import AlertActionModalBodyComponent from 'src/common/components/AlertActionModalBodyComponent'
import AdminAddGroupModal from '../../pages/groups/modal/AdminAddGroupModal'
import AdminEditProductModal from '../../pages/products/modal/AdminEditProductModal'
import AdminEditGroupModal from '../../pages/groups/modal/AdminEditGroupModal'
import AdminEditAdditionModal from '../../pages/additions/modal/AdminEditAdditionModal'
import AdminEditTableModal from '../../pages/tables/modal/AdminEditTableModal'
import AdminEditDeliveryModal from '../../pages/delivery/modal/AdminEditDeliveryModal'
import AdminAddCustomerModal from '../../pages/customers/modal/AdminAddCustomerModal'
import AdminEditCustomerModal from '../../pages/customers/modal/AdminEditCustomerModal'
import AdminEditSupplierModal from '../../pages/suppliers/modal/AdminEditSupplierModal'
import AdminEditExpensesModal from '../../pages/expenses/modal/AdminEditExpensesModal'
import AdminEditExpensesDestinationModal from '../../pages/expensesDestination/modal/AdminEditExpensesDestinationModal'
import AdminEditMemberModal from '../../pages/members/modal/AdminEditMemberModal'
import AdminEditTaxModal from '../../pages/taxes/modal/AdminEditTaxModal'
import AdminEditBranchModal from '../../pages/branches/modal/AdminEditBranchModal'
import AdminEditDiscountModal from '../../pages/discounts/modal/AdminEditDiscountModal'
import AdminEditComboOfferModal from '../../pages/comboOffers/modal/AdminEditComboOfferModal'
import AdminAddBranchModal from '../../pages/branches/modal/AdminAddBranchModal'
import AdminAddRoleModal from '../../pages/roles/modal/AdminAddRoleModal'
import AdminAddMemberModal from '../../pages/members/modal/AdminAddMemberModal'
import AdminAddSupplierModal from '../../pages/suppliers/modal/AdminAddSupplierModal'
import AdminAddExpensesDestinationModal from '../../pages/expensesDestination/modal/AdminAddExpensesDestinationModal'
import AdminAddTaxModal from '../../pages/taxes/modal/AdminAddTaxModal'
import AdminAddTableModal from '../../pages/tables/modal/AdminAddTableModal'
import AdminAddExpensesModal from '../../pages/expenses/modal/AdminAddExpensesModal'
import AdminAddDeliveryModal from '../../pages/delivery/modal/AdminAddDeliveryModal'

export const AdminModalComponentsStructure = {
    adminAddUnitModal: <AdminAddUnitModal />,
    adminEditUnitModal: <AdminEditUnitModal />,
    adminDeleteUnitModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this Unit?' />
    ),
    adminAddGroupModal: <AdminAddGroupModal />,
    adminEditGroupModal: <AdminEditGroupModal />,
    adminDeleteGroupModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this group?' />
    ),
    adminEditProductModal: <AdminEditProductModal />,
    adminDeleteProductModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this product?' />
    ),
    adminEditComboOfferModal: <AdminEditComboOfferModal />,
    adminDeleteComboOfferModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this combo offer?' />
    ),
    adminEditAdditionModal: <AdminEditAdditionModal />,
    adminDeleteAdditionModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this addition?' />
    ),
    adminAddTableModal: <AdminAddTableModal />,
    adminEditTableModal: <AdminEditTableModal />,
    adminDeleteTableModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this table?' />
    ),
    adminAddDeliveryModal: <AdminAddDeliveryModal />,
    adminEditDeliveryModal: <AdminEditDeliveryModal />,
    adminDeleteDeliveryModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this delivery?' />
    ),
    adminAddCustomerModal: <AdminAddCustomerModal />,
    adminEditCustomerModal: <AdminEditCustomerModal />,
    adminDeleteCustomerModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this customer?' />
    ),
    adminAddSupplierModal: <AdminAddSupplierModal />,
    adminEditSupplierModal: <AdminEditSupplierModal />,
    adminDeleteSupplierModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this supplier?' />
    ),
    adminAddExpensesModal: <AdminAddExpensesModal />,
    adminEditExpensesModal: <AdminEditExpensesModal />,
    adminDeleteExpensesModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this expenses?' />
    ),
    adminAddExpensesDestinationModal: <AdminAddExpensesDestinationModal />,
    adminEditExpensesDestinationModal: <AdminEditExpensesDestinationModal />,
    adminDeleteExpensesDestinationModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this expenses destination?' />
    ),
    adminAddMemberModal: <AdminAddMemberModal />,
    adminEditMemberModal: <AdminEditMemberModal />,
    adminDeleteMemberModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this member?' />
    ),
    adminAddTaxModal: <AdminAddTaxModal />,
    adminEditTaxModal: <AdminEditTaxModal />,
    adminDeleteTaxModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this tax?' />
    ),
    adminAddBranchModal: <AdminAddBranchModal />,
    adminEditBranchModal: <AdminEditBranchModal />,
    adminDeleteBranchModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this branch?' />
    ),
    adminEditDiscountModal: <AdminEditDiscountModal />,
    adminDeleteDiscountModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this discount?' />
    ),
    adminAddRoleModal: <AdminAddRoleModal />,
    adminDeleteRoleModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this role?' />
    ),
}

export type AdminModalStructureKeys = ObjectKeys<typeof AdminModalComponentsStructure>
