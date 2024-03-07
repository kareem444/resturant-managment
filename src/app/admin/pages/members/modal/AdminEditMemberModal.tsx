import FormComponent from 'src/common/components/FormComponent';
import { AdminEditMemberStructure } from '../structures/AdminEditMemberStructure';

const AdminEditMemberModal = () => {
    return (
        <>
            <FormComponent {...AdminEditMemberStructure()} />
        </>
    )
};

export default AdminEditMemberModal;
