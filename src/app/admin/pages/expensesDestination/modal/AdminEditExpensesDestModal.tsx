import FormComponent from 'src/common/components/FormComponent';
import { AdminEditExpensesDestStructure } from '../structures/AdminEditExpensesDestStructure';

const AdminEditExpensesDestModal = () => {
  return (
    <>
      <FormComponent {...AdminEditExpensesDestStructure()} />
    </>
  );
};

export default AdminEditExpensesDestModal;
