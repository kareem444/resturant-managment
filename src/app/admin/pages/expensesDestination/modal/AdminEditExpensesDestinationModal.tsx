import FormComponent from 'src/common/components/FormComponent';
import { AdminEditExpensesDestinationStructure } from '../structures/AdminEditExpensesDestinationStructure';

const AdminEditExpensesDestinationModal = () => {
    return (
        <>
            <FormComponent {...AdminEditExpensesDestinationStructure()} />
        </>
    )
};

export default AdminEditExpensesDestinationModal;
