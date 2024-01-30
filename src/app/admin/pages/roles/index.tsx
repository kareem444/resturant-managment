import AdminAddFeatureContainer from "../../containers/AdminAddFeatureContainer"
import AddRoleFeature from "./features/AddRoleFeature"
import RolesDetailsFeature from "./features/RolesDetailsFeature"

function RolesPage() {
    return (
        <>
            <AdminAddFeatureContainer>
                <AddRoleFeature />
            </AdminAddFeatureContainer>
            <RolesDetailsFeature />
        </>
    )
}

export default RolesPage