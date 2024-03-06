import { AdminReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import ValueAddedReportsDetailsFeature from "./features/ValueAddedReportsDetailsFeature"

function ValueAddedReportsPage() {
    return (
        <>
            <AdminReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ValueAddedReportsDetailsFeature />
        </>
    )
}

export default ValueAddedReportsPage