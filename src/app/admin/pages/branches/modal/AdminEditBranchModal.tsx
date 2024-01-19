import FormComponent from 'src/common/components/FormComponent';
import { AdminEditBranchModalFormStructure } from '../structures/AdminEditBranchStructure';

const AdminEditBranchModal = () => {
    return (
        <>
            <FormComponent {...AdminEditBranchModalFormStructure()} />
        </>
    )
};

export default AdminEditBranchModal;
