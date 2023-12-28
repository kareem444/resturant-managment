import FormComponent from 'src/common/components/FormComponent';
import { AdminEditCustomerModalFormStructure } from '../structures/AdminAddCustomerStructure';

const AdminEditCustomerModal = () => {
    return (
        <>
            <FormComponent {...AdminEditCustomerModalFormStructure()} />
        </>
    )
};

export default AdminEditCustomerModal;
