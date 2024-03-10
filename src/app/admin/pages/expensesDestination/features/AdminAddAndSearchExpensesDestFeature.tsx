import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { AdminExpensesDestFilterConstants } from '../constants/AdminExpensesDestFilterConstants';

const AdminAddAndSearchExpensesDestFeature = () => {
  return (
    <AdminAddAndSearchContainer
      addModalComponent="adminAddExpensesDestinationModal"
      filter={{
        items: AdminExpensesDestFilterConstants,
        originalItemsKey: 'expensesDest',
      }}
      formatTitle="s"
    />
  );
};

export default AdminAddAndSearchExpensesDestFeature;
