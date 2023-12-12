import FormComponent from 'src/common/components/FormComponent';
import { AdminEditUnitModalFormStructure } from '../structures/AdminAddUnitStructure';

const AdminEditUnitModal = () => {
    return (
        <>
            <FormComponent {...AdminEditUnitModalFormStructure()} />
        </>
    )
};

export default AdminEditUnitModal;
