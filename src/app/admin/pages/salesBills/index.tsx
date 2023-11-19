import AddSalesBillFeature from "./features/AddSalesBillFeature"
import CustomerSalesBillsFeature from "./features/SalesBillsDetailsFeature"

function SalesBillsPage() {
    return (
        <>
            <AddSalesBillFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <CustomerSalesBillsFeature />
        </>
    )
}

export default SalesBillsPage