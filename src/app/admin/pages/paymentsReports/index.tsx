import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import PaymentsReportsDetailsFeature from "./features/PaymentsReportsDetailsFeature"

function PaymentsReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PaymentsReportsDetailsFeature />
        </>
    )
}

export default PaymentsReportsPage