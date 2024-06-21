import { useAppSelector } from "src/common/redux/store";
import PosTablesFeature from "./features/PosTablesFeature";
import PosTablesHeaderFeature from "./features/PosTablesHeaderFeature";
import { tablesPageState } from "../../redux/PosReduxSelectors";

export default function PosTablesPage() {
    const state = useAppSelector(tablesPageState)

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
