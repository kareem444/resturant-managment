import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminTableFilterConstants } from '../constants/AdminTablesFilterConstants';

const AdminAddAndSearchTableFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddTableModal'
            filter={{
                items: AdminTableFilterConstants,
                originalItemsKey: "tables",
            }}
        />
    )
};

export default AdminAddAndSearchTableFeature;
