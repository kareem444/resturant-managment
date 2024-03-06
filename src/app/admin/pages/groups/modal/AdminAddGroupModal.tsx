import FormComponent from "src/common/components/FormComponent"
import { AdminAddGroupStructure } from "../structures/AdminAddGroupStructure"

const AdminAddGroupModal = () => {
    return (
        <>
            <FormComponent {...AdminAddGroupStructure()} />
        </>
    )
}

export default AdminAddGroupModal