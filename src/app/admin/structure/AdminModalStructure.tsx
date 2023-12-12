import { ObjectKeys } from 'react-hook-form/dist/types/path/common'
import AdminEditUnitModal from '../pages/units/modal/AdminEditUnitModal'
import AlertActionModalBodyComponent from 'src/common/components/AlertActionModalBodyComponent'
import AdminEditProductModal from '../pages/products/modal/AdminEditProductModal'
import AdminEditGroupModal from '../pages/groups/modal/AdminEditGroupModal'

export const AdminModalStructure = {
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
}

export type AdminModalStructureKeys = ObjectKeys<typeof AdminModalStructure>
