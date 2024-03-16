import FormComponent from "src/common/components/FormComponent"
import { AdminAddSupplierStructure } from "../structures/AdminAddSupplierStructure"

const AdminAddSupplierModal = () => {
    return (
        <>
            <FormComponent {...AdminAddSupplierStructure()} />
        </>
    )
}

export default AdminAddSupplierModal