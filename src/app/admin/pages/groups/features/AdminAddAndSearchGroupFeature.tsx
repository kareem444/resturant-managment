import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminGroupFilterConstants } from '../constants/AdminGroupFilterConstants';

const AdminAddAndSearchGroupFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddGroupModal'
            filter={{
                items: AdminGroupFilterConstants,
                originalItemsKey: "groups",
            }}
            formatTitle="s"
        />
    )
};

export default AdminAddAndSearchGroupFeature;
