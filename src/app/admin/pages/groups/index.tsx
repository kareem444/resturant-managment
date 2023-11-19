import AddGroupFeature from "./features/AddGroupFeature"
import GroupsDetailsFeature from "./features/GroupsDetailsFeature"

function GroupsPage() {
    return (
        <>
            <AddGroupFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <GroupsDetailsFeature />
        </>
    )
}

export default GroupsPage