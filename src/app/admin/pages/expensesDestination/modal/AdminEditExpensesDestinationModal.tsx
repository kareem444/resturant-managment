import FormComponent from 'src/common/components/FormComponent';
import { AdminEditExpensesDestinationModalFormStructure } from '../structures/AdminAddExpensesDestinationStructure';

const AdminEditExpensesDestinationModal = () => {
    return (
        <>
            <FormComponent {...AdminEditExpensesDestinationModalFormStructure()} />
        </>
    )
};

export default AdminEditExpensesDestinationModal;
