import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminExpensesFilterConstants } from '../constants/AdminExpensesFilterConstants';

const AdminAddAndSearchExpensesFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddExpensesModal'
            filter={{
                items: AdminExpensesFilterConstants,
                originalItemsKey: "expenses",
            }}
        />
    )
};

export default AdminAddAndSearchExpensesFeature;
