import { ObjectKeys } from 'react-hook-form/dist/types/path/common'
import AdminEditUnitModal from '../../pages/units/modal/AdminEditUnitModal'
import AlertActionModalBodyComponent from 'src/common/components/AlertActionModalBodyComponent'
import AdminEditProductModal from '../../pages/products/modal/AdminEditProductModal'
import AdminEditGroupModal from '../../pages/groups/modal/AdminEditGroupModal'
import AdminEditAdditionModal from '../../pages/additions/modal/AdminEditAdditionModal'
import AdminEditTableModal from '../../pages/tables/modal/AdminEditTableModal'
import AdminEditDeliveryModal from '../../pages/delivary/modal/AdminEditDeliveryModal'
import AdminEditCustomerModal from '../../pages/customers/modal/AdminEditCustomerModal'
import AdminEditSupplierModal from '../../pages/subbliers/modal/AdminEditSupplierModal'
import AdminEditExpensesModal from '../../pages/expenses/modal/AdminEditExpensesModal'
import AdminEditExpensesDestinationModal from '../../pages/expensesDestination/modal/AdminEditExpensesDestinationModal'
import AdminEditMemberModal from '../../pages/members/modal/AdminEditMemberModal'
import AdminEditTaxModal from '../../pages/taxes/modal/AdminEditTaxModal'
import AdminEditBranchModal from '../../pages/branches/modal/AdminEditBranchModal'
import AdminEditDiscountModal from '../../pages/discounts/modal/AdminEditDiscountModal'
import AdminEditComboOfferModal from '../../pages/comboOffers/modal/AdminEditComboOfferModal'

export const AdminModalComponentsStructure = {
    adminEditUnitModal: <AdminEditUnitModal />,
    adminDeleteUnitModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this unit?' />
    ),
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
    adminEditTableModal: <AdminEditTableModal />,
    adminDeleteTableModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this table?' />
    ),
    adminEditDeliveryModal: <AdminEditDeliveryModal />,
    adminDeleteDeliveryModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this delivery?' />
    ),
    adminEditCustomerModal: <AdminEditCustomerModal />,
    adminDeleteCustomerModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this customer?' />
    ),
    adminEditSupplierModal: <AdminEditSupplierModal />,
    adminDeleteSupplierModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this supplier?' />
    ),
    adminEditExpensesModal: <AdminEditExpensesModal />,
    adminDeleteExpensesModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this expenses?' />
    ),
    adminEditExpensesDestinationModal: <AdminEditExpensesDestinationModal />,
    adminDeleteExpensesDestinationModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this expenses destination?' />
    ),
    adminEditMemberModal: <AdminEditMemberModal />,
    adminDeleteMemberModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this member?' />
    ),
    adminEditTaxModal: <AdminEditTaxModal />,
    adminDeleteTaxModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this tax?' />
    ),
    adminEditBranchModal: <AdminEditBranchModal />,
    adminDeleteBranchModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this branch?' />
    ),
    adminEditDiscountModal: <AdminEditDiscountModal />,
    adminDeleteDiscountModal: (
        <AlertActionModalBodyComponent text='Are you sure you want to delete this discount?' />
    ),
}

export type AdminModalStructureKeys = ObjectKeys<typeof AdminModalComponentsStructure>
