import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminDeliveryFilterConstants } from '../constants/AdminDeliveryFilterConstants';

const AdminAddAndSearchDeliveryFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddDeliveryModal'
            filter={{
                items: AdminDeliveryFilterConstants,
                originalItemsKey: "delivery",
            }}
            formatTitle='none'
        />
    )
};

export default AdminAddAndSearchDeliveryFeature;
