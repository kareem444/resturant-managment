import FormComponent from 'src/common/components/FormComponent';
import { AdminEditProductModalFormStructure } from '../structure/AdminEditProductStructure';

const AdminEditProductModal = () => {
    return (
        <>
            <FormComponent {...AdminEditProductModalFormStructure()} />
        </>
    )
};

export default AdminEditProductModal;
