import FormComponent from 'src/common/components/FormComponent';
import { AdminEditTaxModalFormStructure } from '../structures/AdminAddTaxStructure';

const AdminEditTaxModal = () => {
    return (
        <>
            <FormComponent {...AdminEditTaxModalFormStructure()} />
        </>
    )
};

export default AdminEditTaxModal;
