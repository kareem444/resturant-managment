import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminAdditionsFilterConstants } from '../constants/AdminAdditionsFilterConstants';

const AdminAddAndSearchAdditionsFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddAdditionModal'
            filter={{
                items: AdminAdditionsFilterConstants,
                originalItemsKey: "additions",
            }}
            addModalSize='xl'
        />
    )
};

export default AdminAddAndSearchAdditionsFeature;
