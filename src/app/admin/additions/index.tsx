import AddAdditionFeature from "./features/AddAdditionFeature"
import AdditionsDetailsFeature from "./features/AdditionsDetailsFeature"

function AdditionsPage() {
    return (
        <>
            <AddAdditionFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <AdditionsDetailsFeature />
        </>
    )
}

export default AdditionsPage