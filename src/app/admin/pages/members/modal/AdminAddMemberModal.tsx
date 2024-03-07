import FormComponent from "src/common/components/FormComponent"
import { AdminAddMemberStructure } from "../structures/AdminAddMemberStructure"

const AdminAddMemberModal = () => {
    return (
        <>
            <FormComponent {...AdminAddMemberStructure()} />
        </>
    )
}

export default AdminAddMemberModal