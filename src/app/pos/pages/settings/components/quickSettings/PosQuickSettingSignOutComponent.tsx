import { FC, memo } from "react";
import usePosActions from "src/app/pos/redux/usePosReduxActions";
import { PosSettingService } from "src/app/pos/service/posSettingsService";

interface IPosQuickSettingSignOutComponentProps {
    deleteCurrentUser: () => void;
}

const PosQuickSettingSignOutComponent: FC<
    IPosQuickSettingSignOutComponentProps
> = ({ deleteCurrentUser }) => {
    const { setApp, clearData } = usePosActions();
    return (
        <div
            className="btn btn-error justify-between mb-1 text-slate-800"
            onClick={() => PosSettingService.signOut(deleteCurrentUser, setApp, clearData)}
        >
            <span>Sign Out</span>
            <i className="fi fi-rr-arrow-small-right h-6 text-xl"></i>
        </div>
    );
};

export default memo(PosQuickSettingSignOutComponent);
