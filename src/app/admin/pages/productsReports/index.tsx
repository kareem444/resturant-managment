import { ReportsPickersComponent } from "../../components/AdminReportsPickersComponent"
import ProductsReportsDetailsFeature from "./features/ProductsReportsDetailsFeature"

function ProductsReportsPage() {
    return (
        <>
            <ReportsPickersComponent />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <ProductsReportsDetailsFeature />
        </>
    )
}

export default ProductsReportsPage