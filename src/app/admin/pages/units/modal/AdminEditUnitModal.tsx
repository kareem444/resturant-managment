import FormComponent from 'src/common/components/FormComponent';
import { AdminEditUnitStructure } from '../structures/AdminEditUnitStructure';

const AdminEditUnitModal = () => {
    return (
        <>
            <FormComponent {...AdminEditUnitStructure()} />
        </>
    )
};

export default AdminEditUnitModal;
