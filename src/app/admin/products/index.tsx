import AddProductFeature from "./features/AddProductFeature"
import UnitsProductsFeature from "./features/ProductsDetailsFeature"

function ProductsPage() {
    return (
        <>
            <AddProductFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <UnitsProductsFeature />
        </>
    )
}

export default ProductsPage