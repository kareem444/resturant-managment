import FormComponent from 'src/common/components/FormComponent';
import { AdminEditDeliveryStructure } from '../structures/AdminEditDeliveryStructure';

const AdminEditDeliveryModal = () => {
    return (
        <>
            <FormComponent {...AdminEditDeliveryStructure()} />
        </>
    )
};

export default AdminEditDeliveryModal;
