import AddPaymentsTypeFeature from "./features/AddPaymentsTypeFeature"
import PaymentsTypesDetailsFeature from "./features/PaymentsTypesDetailsFeature"

function PaymentsTypesPage() {
    return (
        <>
            <AddPaymentsTypeFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PaymentsTypesDetailsFeature />
        </>
    )
}

export default PaymentsTypesPage