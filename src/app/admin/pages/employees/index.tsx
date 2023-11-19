import AddEmployeeFeature from "./features/AddEmployeeFeature"
import EmployeesDetailsFeature from "./features/EmployeesDetailsFeature"

function EmployeesPage() {
    return (
        <>
            <AddEmployeeFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <EmployeesDetailsFeature />
        </>
    )
}

export default EmployeesPage