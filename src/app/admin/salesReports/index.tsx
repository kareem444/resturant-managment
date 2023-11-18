import { ReportsPickersComponent } from "../../../common/components/ReportsPickersComponent"
import SalesReportsDetailsFeature from "./features/SalesReportsDetailsFeature"

function SalesReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <SalesReportsDetailsFeature />
        </>
    )
}

export default SalesReportsPage