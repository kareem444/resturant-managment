import FormComponent from "src/common/components/FormComponent"
import { AdminAddBranchStructure } from "../structures/AdminAddBranchStructure"

const AdminAddBranchModal = () => {
    return (
        <>
            <FormComponent {...AdminAddBranchStructure()} />
        </>
    )
}

export default AdminAddBranchModal