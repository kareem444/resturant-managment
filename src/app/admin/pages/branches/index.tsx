import AddBranchFeature from "./features/AddBranchFeature"
import BranchesDetailsFeature from "./features/BranchesDetailsFeature"

function BranchesPage() {
    return (
        <>
            <AddBranchFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <BranchesDetailsFeature />
        </>
    )
}

export default BranchesPage