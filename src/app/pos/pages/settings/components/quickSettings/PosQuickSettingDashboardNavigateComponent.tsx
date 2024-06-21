import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { IRoleTypes } from "src/app/admin/pages/roles/interfaces/AdminRoleInterface";
import { routes } from "src/common/routes/routes";

interface IPosQuickSettingDashboardNavigateComponentProps {
    roleType?: IRoleTypes;
    isOrganizationOwner: boolean;
}

const PosQuickSettingDashboardNavigateComponent: FC<
    IPosQuickSettingDashboardNavigateComponentProps
> = ({ roleType, isOrganizationOwner }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(routes.admin.dashboard.fullPath);
    };

    if (isOrganizationOwner || roleType === "dashboardAndPos")
        return (
            <div
                className="btn btn-ghost bg-base-200 justify-between mb-1 text-slate-800"
                onClick={handleOnClick}
            >
                <span>Dashboard</span>
                <i className="fi fi-rr-desktop-wallpaper h-6 text-xl"></i>
            </div>
        );
    return <></>;
};

export default memo(PosQuickSettingDashboardNavigateComponent);
