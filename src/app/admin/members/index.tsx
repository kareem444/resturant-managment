import AddMemberFeature from "./features/AddMemberFeature"
import MembersDetailsFeature from "./features/MembersDetailsFeature"

function MembersPage() {
    return (
        <>
            <AddMemberFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <MembersDetailsFeature />
        </>
    )
}

export default MembersPage