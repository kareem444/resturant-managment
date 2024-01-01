import AddComboOfferFeature from "./features/AddComboOfferFeature"
import UnitsComboOffersFeature from "./features/ComboOffersDetailsFeature"

function ComboOffersPage() {
    return (
        <>
            <AddComboOfferFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <UnitsComboOffersFeature />
        </>
    )
}

export default ComboOffersPage