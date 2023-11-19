import AddProfessionFeature from "./features/AddProfessionFeature"
import GroupsProfessionsFeature from "./features/ProfessionsDetailsFeature"

function ProfessionsPage() {
    return (
        <>
            <AddProfessionFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <GroupsProfessionsFeature />
        </>
    )
}

export default ProfessionsPage