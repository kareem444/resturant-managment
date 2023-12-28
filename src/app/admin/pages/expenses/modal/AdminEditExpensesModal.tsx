import FormComponent from 'src/common/components/FormComponent';
import { AdminEditExpensesModalFormStructure } from '../structures/AdminAddExpensesStructure';

const AdminEditExpensesModal = () => {
    return (
        <>
            <FormComponent {...AdminEditExpensesModalFormStructure()} />
        </>
    )
};

export default AdminEditExpensesModal;
