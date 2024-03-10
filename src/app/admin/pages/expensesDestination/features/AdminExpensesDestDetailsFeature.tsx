import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer';
import { AdminGetExpensesDestStructure } from '../structures/AdminGetExpensesDestStructure';

const AdminExpensesDestsDetailsFeature = () => {
  return <AdminDetailsStatusContainer {...AdminGetExpensesDestStructure()} />;
};

export default AdminExpensesDestsDetailsFeature;
