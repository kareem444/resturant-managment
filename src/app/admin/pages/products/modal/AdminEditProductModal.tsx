import FormComponent from 'src/common/components/FormComponent';
import { AdminEditProductModalFormStructure } from '../structure/AdminAddProductStructure';

const AdminEditProductModal = () => {
    return (
        <>
            <FormComponent {...AdminEditProductModalFormStructure()} />
        </>
    )
};

export default AdminEditProductModal;
