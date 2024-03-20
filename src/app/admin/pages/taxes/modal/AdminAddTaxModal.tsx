import FormComponent from "src/common/components/FormComponent"
import { AdminAddTaxStructure } from "../structures/AdminAddTaxesStructure"

const AdminAddTaxModal = () => {
    return (
        <>
            <FormComponent {...AdminAddTaxStructure()} />
        </>
    )
}

export default AdminAddTaxModal