import FormComponent from 'src/common/components/FormComponent';
import { AdminEditTableModalFormStructure } from '../structures/AdminAddTableStructure';

const AdminEditTableModal = () => {
    return (
        <>
            <FormComponent {...AdminEditTableModalFormStructure()} />
        </>
    )
};

export default AdminEditTableModal;
