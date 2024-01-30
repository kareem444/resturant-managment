import AdminAddFeatureContainer from "../../containers/AdminAddFeatureContainer"
import AddMemberFeature from "./features/AddMemberFeature"
import MembersDetailsFeature from "./features/MembersDetailsFeature"

function MembersPage() {
    return (
        <>
            <AdminAddFeatureContainer>
                <AddMemberFeature />
            </AdminAddFeatureContainer>
            <MembersDetailsFeature />
        </>
    )
}

export default MembersPage