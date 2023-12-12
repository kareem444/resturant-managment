import AddShiftReportFeature from "./features/AddShiftReportFeature"
import CustomerShiftReportsFeature from "./features/ShiftReportsDetailsFeature"

function ShiftReportsPage() {
    return (
        <>
            <AddShiftReportFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <CustomerShiftReportsFeature />
        </>
    )
}

export default ShiftReportsPage