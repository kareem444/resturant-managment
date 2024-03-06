import { AdminReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import PurchasesReportsDetailsFeature from "./features/PurchasesReportsDetailsFeature"

function PurchasesReportsPage() {
    return (
        <>
            <AdminReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PurchasesReportsDetailsFeature />
        </>
    )
}

export default PurchasesReportsPage