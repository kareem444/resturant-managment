import FormComponent from 'src/common/components/FormComponent';
import { AdminEditAdditionModalFormStructure } from '../structures/AdminAddAdditionStructure';

const AdminEditAdditionModal = () => {
    return (
        <>
            <FormComponent {...AdminEditAdditionModalFormStructure()} />
        </>
    )
};

export default AdminEditAdditionModal;
