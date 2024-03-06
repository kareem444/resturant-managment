import { AdminReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import PaymentsReportsDetailsFeature from "./features/PaymentsReportsDetailsFeature"

function PaymentsReportsPage() {
    return (
        <>
            <AdminReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PaymentsReportsDetailsFeature />
        </>
    )
}

export default PaymentsReportsPage