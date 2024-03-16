import FormComponent from 'src/common/components/FormComponent';
import { AdminEditSupplierStructure } from '../structures/AdminEditSupplierStructure';

const AdminEditSupplierModal = () => {
    return (
        <>
            <FormComponent {...AdminEditSupplierStructure()} />
        </>
    )
};

export default AdminEditSupplierModal;
