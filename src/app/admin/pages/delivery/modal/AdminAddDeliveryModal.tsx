import FormComponent from "src/common/components/FormComponent"
import { AdminAddDeliveryStructure } from "../structures/AdminAddDeliveryStructure"

const AdminAddDeliveryModal = () => {
    return (
        <>
            <FormComponent {...AdminAddDeliveryStructure()} />
        </>
    )
}

export default AdminAddDeliveryModal