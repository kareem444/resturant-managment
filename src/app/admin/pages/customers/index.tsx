import AddCustomerFeature from "./features/AddCustomerFeature"
import CustomerDetailsFeature from "./features/CustomersDetailsFeature"

function CustomersPage() {
    return (
        <>
            <AddCustomerFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <CustomerDetailsFeature />
        </>
    )
}

export default CustomersPage