import FormComponent from "src/common/components/FormComponent"
import { AdminAddExpensesStructure } from "../structures/AdminAddExpensesStructure"

const AdminAddExpensesModal = () => {
    return (
        <>
            <FormComponent {...AdminAddExpensesStructure()} />
        </>
    )
}

export default AdminAddExpensesModal