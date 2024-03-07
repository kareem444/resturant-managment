import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminMemberFilterConstants } from '../constants/AdminMemberFilterConstants';

const AdminAddAndSearchMemberFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddMemberModal'
            filter={{
                items: AdminMemberFilterConstants,
                originalItemsKey: "members",
            }}
        />
    )
};

export default AdminAddAndSearchMemberFeature;
