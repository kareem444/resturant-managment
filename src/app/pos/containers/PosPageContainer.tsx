import SetRoutesContainer from "../../../common/containers/SetRoutesContainer";
import PosDrawerContainer from "./PosDrawerContainer";
import { PosRoutes } from "../routes/PosRoutes";
import ModalLayoutContainer from "src/common/containers/ModalContainer";
import GuardedRouteComponent from "src/common/components/GuardedRouteComponent";
import usePosPermissions from "../hooks/usePosPermissions";
import PosLoadingComponent from "../components/PosLoadingComponent";
import { useAppSelector } from "src/common/redux/store";
import { posAppState } from "../redux/PosReduxSelectors";
import { useEffect } from "react";
import { PosDataService } from "../service/posDataService";
import usePosActions from "../redux/usePosReduxActions";

function PosPageContainer() {
    const { isPos } = usePosPermissions();
    const app = useAppSelector(posAppState)
    const { setApp, setData } = usePosActions()

    useEffect(() => {
        PosDataService.initData(setApp, setData)
    }, [])

    return (
        <GuardedRouteComponent authGuard={true}>
            <GuardedRouteComponent signUserGuard={!isPos}>
                <div
                    className="bg-base-200 text-slate-500 grid grid-cols-10"
                    data-theme="winter"
                >
                    <PosLoadingComponent show={app.isLoading} loadingText={app.loadingText} />
                    <div className="col-span-1 p-3 pr-0">
                        <PosDrawerContainer />
                    </div>
                    <div className="col-span-9">
                        <SetRoutesContainer routes={PosRoutes.withoutOrderSection} />
                    </div>
                    <ModalLayoutContainer />
                </div>
            </GuardedRouteComponent>
        </GuardedRouteComponent>
    );
}

export default PosPageContainer;
