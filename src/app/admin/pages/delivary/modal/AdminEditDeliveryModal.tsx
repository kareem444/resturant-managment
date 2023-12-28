import FormComponent from 'src/common/components/FormComponent';
import { AdminEditDeliveryModalFormStructure } from '../structures/AdminAddDeliveryStructure';

const AdminEditDeliveryModal = () => {
    return (
        <>
            <FormComponent {...AdminEditDeliveryModalFormStructure()} />
        </>
    )
};

export default AdminEditDeliveryModal;
