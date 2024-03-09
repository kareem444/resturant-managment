import FormComponent from "src/common/components/FormComponent"
import { AdminAddCustomerStructure } from "../structures/AdminAddCustomerStructure"

const AdminAddCustomerModal = () => {
    return (
        <>
            <FormComponent {...AdminAddCustomerStructure()} />
        </>
    )
}

export default AdminAddCustomerModal