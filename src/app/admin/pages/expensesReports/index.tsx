import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import ExpensesReportsDetailsFeature from "./features/ExpensesReportsDetailsFeature"

function ExpensesReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ExpensesReportsDetailsFeature />
        </>
    )
}

export default ExpensesReportsPage