import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminCustomerFilterConstants } from '../constants/AdminCustomerFilterConstants';

const AdminAddAndSearchCustomerFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddCustomerModal'
            filter={{
                items: AdminCustomerFilterConstants,
                originalItemsKey: "customers",
            }}
            formatTitle="s"
        />
    )
};

export default AdminAddAndSearchCustomerFeature;
