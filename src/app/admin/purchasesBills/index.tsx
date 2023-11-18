import AddPurchasesBillFeature from "./features/AddPurchasesBillFeature"
import PurchasesBillsDetailsFeature from "./features/PurchasesBillssDetailsFeature"

function PurchasesBillsPage() {
    return (
        <>
            <AddPurchasesBillFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <PurchasesBillsDetailsFeature />
        </>
    )
}

export default PurchasesBillsPage