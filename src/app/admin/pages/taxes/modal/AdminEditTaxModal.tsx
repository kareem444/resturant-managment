import FormComponent from 'src/common/components/FormComponent';
import { AdminEditTaxStructure } from '../structures/AdminEditTaxesStructure';

const AdminEditTaxModal = () => {
    return (
        <>
            <FormComponent {...AdminEditTaxStructure()} />
        </>
    )
};

export default AdminEditTaxModal;
