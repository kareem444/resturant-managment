import FormComponent from 'src/common/components/FormComponent';
import { AdminEditExpensesStructure } from '../structures/AdminEditExpensesStructure';

const AdminEditExpensesModal = () => {
    return (
        <>
            <FormComponent {...AdminEditExpensesStructure()} />
        </>
    )
};

export default AdminEditExpensesModal;
