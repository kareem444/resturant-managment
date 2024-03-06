import { AdminReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import TobaccoDutyReportsDetailsFeature from "./features/TobaccoDutyReportsDetailsFeature"

function TobaccoDutyReportsPage() {
    return (
        <>
            <AdminReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <TobaccoDutyReportsDetailsFeature />
        </>
    )
}

export default TobaccoDutyReportsPage