import FormComponent from 'src/common/components/FormComponent';
import { AdminEditTableStructure } from '../structures/AdminEditTablesStructure';

const AdminEditTableModal = () => {
    return (
        <>
            <FormComponent {...AdminEditTableStructure()} />
        </>
    )
};

export default AdminEditTableModal;
