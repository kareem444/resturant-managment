import FormComponent from 'src/common/components/FormComponent';
import { AdminEditBranchStructure } from '../structures/AdminEditBranchStructure';

const AdminEditBranchModal = () => {
    return (
        <>
            <FormComponent {...AdminEditBranchStructure()} />
        </>
    )
};

export default AdminEditBranchModal;
