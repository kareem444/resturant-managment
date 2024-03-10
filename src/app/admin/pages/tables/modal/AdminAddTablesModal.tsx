import FormComponent from 'src/common/components/FormComponent';
import { AdminAddTablestructure } from '../structures/AdminAddTablesStructure';

const AdminAddTablesModal = () => {
  return (
    <>
      <FormComponent {...AdminAddTablestructure()} />
    </>
  );
};

export default AdminAddTablesModal;
