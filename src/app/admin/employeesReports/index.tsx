import { ReportsPickersComponent } from "../../../common/components/ReportsPickersComponent"
import EmployeesReportsDetailsFeature from "./features/EmployeesReportsDetailsFeature"

function EmployeesReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <EmployeesReportsDetailsFeature />
        </>
    )
}

export default EmployeesReportsPage