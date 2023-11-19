import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import ClientsStatementsReportsDetailsFeature from "./features/ClientsStatementsReportsDetailsFeature"

function ClientsStatementsReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ClientsStatementsReportsDetailsFeature />
        </>
    )
}

export default ClientsStatementsReportsPage