import AddSupplierFeature from "./features/AddSupplierFeature"
import SuppliersDetailsFeature from "./features/SuppliersDetailsFeature"

function SuppliersPage() {
    return (
        <>
            <AddSupplierFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <SuppliersDetailsFeature />
        </>
    )
}

export default SuppliersPage