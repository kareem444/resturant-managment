import PosSignOutSlice from "../slices/PosSignOutSlice";
import PosDashboardNavigateSlice from "../slices/PosDashboardNavigateSlice";

const PosQuickSettingsFeature = () => {
    return (
        <div className="card bg-white h-full shadow-md p-2 w-full">
            <div className="card-title mx-auto">Quick Settings</div>
            <div className="divider my-1"></div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <PosDashboardNavigateSlice />
                </div>
                <PosSignOutSlice />
            </div>
        </div>
    )
};

export default PosQuickSettingsFeature;
