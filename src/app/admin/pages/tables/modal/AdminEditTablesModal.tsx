import FormComponent from 'src/common/components/FormComponent';
import { AdminEditTablestructure } from '../structures/AdminEditTablesStructure';

const AdminEditTablesModal = () => {
  return (
    <>
      <FormComponent {...AdminEditTablestructure()} />
    </>
  );
};

export default AdminEditTablesModal;
