import FormComponent from "src/common/components/FormComponent"
import { AdminAddTableStructure } from "../structures/AdminAddTablesStructure"

const AdminAddTableModal = () => {
    return (
        <>
            <FormComponent {...AdminAddTableStructure()} />
        </>
    )
}

export default AdminAddTableModal