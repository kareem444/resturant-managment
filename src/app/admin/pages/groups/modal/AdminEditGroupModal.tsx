import FormComponent from 'src/common/components/FormComponent';
import { AdminEditGroupStructure } from '../structures/AdminEditGroupStructure';

const AdminEditGroupModal = () => {
    return (
        <>
            <FormComponent {...AdminEditGroupStructure()} />
        </>
    )
};

export default AdminEditGroupModal;
