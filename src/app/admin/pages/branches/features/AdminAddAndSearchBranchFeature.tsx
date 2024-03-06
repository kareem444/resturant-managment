import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminBranchFilterConstants } from '../constants/AdminBranchFilterConstants';

const AdminAddAndSearchBranchFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddBranchModal'
            filter={{
                items: AdminBranchFilterConstants,
                originalItemsKey: "branches",
            }}
            formatTitle="es"
        />
    )
};

export default AdminAddAndSearchBranchFeature;
