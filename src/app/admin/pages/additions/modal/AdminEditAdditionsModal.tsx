import FormComponent from 'src/common/components/FormComponent';
import { AdminEditAdditionsStructure } from '../structures/AdminEditAdditionsStructure';

const AdminEditAdditionsModal = () => {
    return (
        <>
            <FormComponent {...AdminEditAdditionsStructure()} />
        </>
    )
};

export default AdminEditAdditionsModal;
