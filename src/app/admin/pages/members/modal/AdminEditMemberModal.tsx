import FormComponent from 'src/common/components/FormComponent';
import { AdminEditMemberModalFormStructure } from '../structures/AdminAddMemberStructure';

const AdminEditMemberModal = () => {
    return (
        <>
            <FormComponent {...AdminEditMemberModalFormStructure()} />
        </>
    )
};

export default AdminEditMemberModal;
