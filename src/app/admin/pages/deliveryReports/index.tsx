import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import DeliveryReportsDetailsFeature from "./features/DeliveryStatementsReportsDetailsFeature"

function DeliveryReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <DeliveryReportsDetailsFeature />
        </>
    )
}

export default DeliveryReportsPage