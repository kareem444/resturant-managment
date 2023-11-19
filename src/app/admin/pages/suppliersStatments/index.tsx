import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import SuppliersStatementsReportsDetailsFeature from "./features/SuppliersReportsDetailsFeature"

function SuppliersStatementsReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <SuppliersStatementsReportsDetailsFeature />
        </>
    )
}

export default SuppliersStatementsReportsPage