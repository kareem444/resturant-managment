import AdminAddFeatureContainer from "../../containers/AdminAddFeatureContainer"
import AddBranchFeature from "./features/AddBranchFeature"
import BranchesDetailsFeature from "./features/BranchesDetailsFeature"

function BranchesPage() {
    return (
        <>
            <AdminAddFeatureContainer>
                <AddBranchFeature />
            </AdminAddFeatureContainer>
            <BranchesDetailsFeature />
        </>
    )
}

export default BranchesPage