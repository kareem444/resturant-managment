import AddUnitFeature from "./features/AddUnitFeature"
import UnitsDetailsFeature from "./features/UnitsDetailsFeature"

function UnitsPage() {
    return (
        <>
            <AddUnitFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <UnitsDetailsFeature />
        </>
    )
}

export default UnitsPage