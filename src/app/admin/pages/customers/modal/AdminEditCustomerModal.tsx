import FormComponent from 'src/common/components/FormComponent';
import { AdminEditCustomerStructure } from '../structures/AdminEditCustomerStructure';

const AdminEditCustomerModal = () => {
    return (
        <>
            <FormComponent {...AdminEditCustomerStructure()} />
        </>
    )
};

export default AdminEditCustomerModal;
