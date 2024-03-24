import FormComponent from "src/common/components/FormComponent"
import { AdminAddAdditionsStructure } from "../structures/AdminAddaAdditionsStructure"

const AdminAddAdditionsModal = () => {
    return (
        <>
            <FormComponent {...AdminAddAdditionsStructure()} />
        </>
    )
}

export default AdminAddAdditionsModal