import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer';
import { AdminGetTablestructure } from '../structures/AdminGetTablesStructure';

const AdminTablesDetailsFeature = () => {
  return <AdminDetailsStatusContainer {...AdminGetTablestructure()} />;
};

export default AdminTablesDetailsFeature;
