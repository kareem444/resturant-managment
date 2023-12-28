import FormComponent from 'src/common/components/FormComponent';
import { AdminEditSupplierModalFormStructure } from '../structures/AdminAddSupplierStructure';

const AdminEditSupplierModal = () => {
    return (
        <>
            <FormComponent {...AdminEditSupplierModalFormStructure()} />
        </>
    )
};

export default AdminEditSupplierModal;
