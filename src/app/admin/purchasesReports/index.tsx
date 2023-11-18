import { ReportsPickersComponent } from "../../../common/components/ReportsPickersComponent"
import PurchasesReportsDetailsFeature from "./features/PurchasesReportsDetailsFeature"

function PurchasesReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PurchasesReportsDetailsFeature />
        </>
    )
}

export default PurchasesReportsPage