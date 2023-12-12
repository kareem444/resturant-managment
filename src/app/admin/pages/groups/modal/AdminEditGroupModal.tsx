import FormComponent from 'src/common/components/FormComponent';
import { AdminEditGroupModalFormStructure } from '../structures/AdminAddGroupStructure';

const AdminEditGroupModal = () => {
    return (
        <>
            <FormComponent {...AdminEditGroupModalFormStructure()} />
        </>
    )
};

export default AdminEditGroupModal;
