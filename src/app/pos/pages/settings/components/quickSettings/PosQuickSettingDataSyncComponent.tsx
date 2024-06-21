import { FC } from "react";
import { ILocalCurrentUserModel } from "src/app/auth/models/local/AuthLocalModel";
import usePosActions from "src/app/pos/redux/usePosReduxActions";
import { PosDataService } from "src/app/pos/service/posDataService";

interface IPosQuickSettingDataSyncComponentProps {
    currentUser: ILocalCurrentUserModel | undefined;
}

const PosQuickSettingDataSyncComponent: FC<
    IPosQuickSettingDataSyncComponentProps
> = ({ currentUser }) => {
    const { setApp, setData } = usePosActions();
    return (
        <div className="card bg-base-200 p-4">
            <div className="card-title text-[1rem] flex items-center text-slate-800">
                <span>Sync Data</span>
                <i className="fi fi-rr-refresh h-5"></i>
            </div>
            <div className="divider m-0"></div>
            <div className="flex justify-between gap-5">
                <div
                    className="bg-cyan-500 text-white text-4xl text-center py-3 w-1/2 rounded-lg cursor-pointer hover:bg-cyan-400 active:scale-95"
                    onClick={() => PosDataService.fetchData(setApp, setData, currentUser)}
                >
                    <i className="fi fi-sr-down"></i>
                </div>
                <div
                    className="bg-cyan-500 text-white text-center text-4xl py-3 w-1/2 rounded-lg cursor-pointer hover:bg-cyan-400 active:scale-95"
                    onClick={() => { }}
                >
                    <i className="fi fi-sr-up"></i>
                </div>
            </div>
        </div>
    );
};

export default PosQuickSettingDataSyncComponent;
