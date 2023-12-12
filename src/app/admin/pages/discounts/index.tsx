import AddDiscountFeature from "./features/AddDiscountFeature"
import DiscountsDetailsFeature from "./features/DiscountsDetailsFeature"

function DiscountsPage() {
    return (
        <>
            <AddDiscountFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <DiscountsDetailsFeature />
        </>
    )
}

export default DiscountsPage