import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer';
import { AdminTablesFilterConstants } from '../constants/AdminTablesFilterConstants';

const AdminAddAndSearchTablesFeature = () => {
  return (
    <AdminAddAndSearchContainer
      addModalComponent="adminAddTableModal"
      filter={{
        items: AdminTablesFilterConstants,
        originalItemsKey: 'tables',
      }}
      formatTitle="s"
    />
  );
};

export default AdminAddAndSearchTablesFeature;
