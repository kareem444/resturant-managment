import FormComponent from "src/common/components/FormComponent"
import { AdminAddExpensesDestinationStructure } from "../structures/AdminAddExpensesDestinationStructure"

const AdminAddExpensesDestinationModal = () => {
    return (
        <>
            <FormComponent {...AdminAddExpensesDestinationStructure()} />
        </>
    )
}

export default AdminAddExpensesDestinationModal