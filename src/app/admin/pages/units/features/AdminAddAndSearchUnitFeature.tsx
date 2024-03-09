import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminUnitFilterConstants } from '../constants/AdminUnitFilterConstants';

const AdminAddAndSearchUnitFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddUnitModal'
            filter={{
                items: AdminUnitFilterConstants,
                originalItemsKey: "units",
            }}
            formatTitle="s"
        />
    )
};

export default AdminAddAndSearchUnitFeature;
