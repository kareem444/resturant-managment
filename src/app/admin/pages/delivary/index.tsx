import AddDeliveryFeature from "./features/AddDeliveryFeature"
import DeliveryDetailsFeature from "./features/DeliverysDetailsFeature"

function DeliveryPage() {
    return (
        <>
            <AddDeliveryFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <DeliveryDetailsFeature />
        </>
    )
}

export default DeliveryPage