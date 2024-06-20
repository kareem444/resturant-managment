import SetRoutesContainer from "src/common/containers/SetRoutesContainer";
import PosOrderContainer from "./PosOrderContainer";
import { PosRoutes } from "../routes/PosRoutes";

const PosHomeLayoutContainer = () => {
    return (
        <div className="ml-4 grid grid-cols-12 h-screen gap-2">
            <div className="col-span-8 h-full flex flex-col overflow-y-hidden pb-3">
                <SetRoutesContainer routes={PosRoutes.withOrderSection} />
            </div>
            <div className="py-3 px-2 col-span-4 h-full flex flex-col overflow-y-hidden">
                <PosOrderContainer />
            </div>
        </div>
    )
};

export default PosHomeLayoutContainer;
