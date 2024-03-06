import FormComponent from "src/common/components/FormComponent"
import { AdminAddUnitStructure } from "../structures/AdminAddUnitStructure"

const AdminAddUnitModal = () => {
    return (
        <>
            <FormComponent {...AdminAddUnitStructure()} />
        </>
    )
}

export default AdminAddUnitModal