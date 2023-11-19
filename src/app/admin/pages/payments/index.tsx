import AddPaymentFeature from "./features/AddPaymentFeature"
import PaymentsDetailsFeature from "./features/PaymentsDetailsFeature"

function PaymentsPage() {
    return (
        <>
            <AddPaymentFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PaymentsDetailsFeature />
        </>
    )
}

export default PaymentsPage