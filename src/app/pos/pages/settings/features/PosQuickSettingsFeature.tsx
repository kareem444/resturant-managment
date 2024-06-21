import PosQuickSettingSignOutComponent from "../components/quickSettings/PosQuickSettingSignOutComponent";
import PosQuickSettingDashboardNavigateComponent from "../components/quickSettings/PosQuickSettingDashboardNavigateComponent";
import PosQuickSettingDataSyncComponent from "../components/quickSettings/PosQuickSettingDataSyncComponent";
import { FC, memo } from "react";
import { IRoleTypes } from "src/app/admin/pages/roles/interfaces/AdminRoleInterface";
import { ILocalCurrentUserModel } from "src/app/auth/models/local/AuthLocalModel";

interface IPosQuickSettingsFeatureProps {
    roleType?: IRoleTypes;
    isOrganizationOwner: boolean;
    deleteCurrentUser: () => void;
    currentUser: ILocalCurrentUserModel | undefined
}

const PosQuickSettingsFeature: FC<IPosQuickSettingsFeatureProps> = ({
    roleType,
    isOrganizationOwner,
    deleteCurrentUser,
    currentUser
}) => {
    return (
        <div className="card bg-white h-full shadow-md p-2 w-full">
            <div className="card-title mx-auto">Quick Settings</div>
            <div className="divider my-1"></div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <PosQuickSettingDashboardNavigateComponent
                        roleType={roleType}
                        isOrganizationOwner={isOrganizationOwner}
                    />
                    <PosQuickSettingDataSyncComponent currentUser={currentUser} />
                </div>
                <PosQuickSettingSignOutComponent
                    deleteCurrentUser={deleteCurrentUser}
                />
            </div>
        </div>
    );
};

export default memo(PosQuickSettingsFeature);
