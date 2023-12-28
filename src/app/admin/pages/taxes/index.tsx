import AddTaxFeature from "./features/AddTaxFeature"
import TaxesDetailsFeature from "./features/TaxesDetailsFeature"

function TaxesPage() {
    return (
        <>
            <AddTaxFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <TaxesDetailsFeature />
        </>
    )
}

export default TaxesPage