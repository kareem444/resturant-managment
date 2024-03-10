import FormComponent from 'src/common/components/FormComponent';
import { AdminAddExpensesDestStructure } from '../structures/AdminAddExpensesDestStructure';

const AdminAddExpensesDestModal = () => {
  return (
    <>
      <FormComponent {...AdminAddExpensesDestStructure()} />
    </>
  );
};

export default AdminAddExpensesDestModal;
