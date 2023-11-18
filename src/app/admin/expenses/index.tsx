import AddExpensesFeature from "./features/AddExpensesFeature"
import ExpensesDetailsFeature from "./features/ExpensesDetailsFeature"

function ExpensesPage() {
    return (
        <>
            <AddExpensesFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ExpensesDetailsFeature />
        </>
    )
}

export default ExpensesPage