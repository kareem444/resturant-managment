import FormComponent from 'src/common/components/FormComponent';
import { AdminEditComboOfferModalFormStructure } from '../structure/AdminEditComboOfferStructure';

const AdminEditComboOfferModal = () => {
    return (
        <>
            <FormComponent {...AdminEditComboOfferModalFormStructure()} />
        </>
    )
};

export default AdminEditComboOfferModal;
