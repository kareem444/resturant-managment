import AddTableFeature from "./features/AddTableFeature"
import TablesDetailsFeature from "./features/TablesDetailsFeature"

function TablesPage() {
    return (
        <>
            <AddTableFeature />
            <div className='divider my-2 w-1/4 collapse-open mx-auto'></div>
            <TablesDetailsFeature />
        </>
    )
}

export default TablesPage