import PosTablesFeature from "./features/PosTablesFeature";
import PosTablesHeaderFeature from "./features/PosTablesHeaderFeature";

export default function PosTablesPage() {
    return (
        <>
            <div className='my-4'>
                <PosTablesHeaderFeature />
            </div>
            <div className='overflow-y-scroll flex-1 no-scrollbar'>
                <PosTablesFeature />
            </div>
        </>
    )
}
