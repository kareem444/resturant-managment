import SetRoutesContainer from "src/common/containers/SetRoutesContainer";
import PosOrderContainer from "./PosOrderContainer";
import { PosRoutes } from "../routes/PosRoutes";

const PosHomeLayoutContainer = () => {
    return (
        <div className="ml-4 flex h-screen">
            <div className="w-full sm:w-3/5 md:w-7/12 lg:w-8/12 pr-2">
                <SetRoutesContainer routes={PosRoutes.withOrderSection} />
            </div>
            <div className="hidden sm:block sm:w-2/5 md:w-5/12 lg:w-4/12 py-4 px-2">
                <PosOrderContainer />
            </div>
        </div>
    )
};

export default PosHomeLayoutContainer;
