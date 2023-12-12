import AddRoleFeature from "./features/AddRoleFeature"
import RolesDetailsFeature from "./features/RolesDetailsFeature"

function RolesPage() {
    return (
        <>
            <AddRoleFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <RolesDetailsFeature />
        </>
    )
}

export default RolesPage