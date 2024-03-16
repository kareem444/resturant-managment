import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminSupplierFilterConstants } from '../constants/AdminSupplierFilterConstants';

const AdminAddAndSearchSupplierFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddSupplierModal'
            filter={{
                items: AdminSupplierFilterConstants,
                originalItemsKey: "suppliers",
            }}
            formatTitle="s"
        />
    )
};

export default AdminAddAndSearchSupplierFeature;
