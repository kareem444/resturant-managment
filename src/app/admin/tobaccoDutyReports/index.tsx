import { ReportsPickersComponent } from "../../../common/components/ReportsPickersComponent"
import TobaccoDutyReportsDetailsFeature from "./features/TobaccoDutyReportsDetailsFeature"

function TobaccoDutyReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <TobaccoDutyReportsDetailsFeature />
        </>
    )
}

export default TobaccoDutyReportsPage