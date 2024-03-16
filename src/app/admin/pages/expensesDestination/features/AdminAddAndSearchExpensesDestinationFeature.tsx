import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminExpensesDestinationFilterConstants } from '../constants/AdminExpensesDestinationFilterConstants';

const AdminAddAndSearchExpensesDestinationFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddExpensesDestinationModal'
            filter={{
                items: AdminExpensesDestinationFilterConstants,
                originalItemsKey: "expensesDestinations",
            }}
            formatTitle="s"
            buttonClassName='min-w-max'
        />
    )
};

export default AdminAddAndSearchExpensesDestinationFeature;
