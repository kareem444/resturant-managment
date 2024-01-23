import { useNavigate } from "react-router-dom";
import useCurrentUser from "src/common/hooks/useCurrentUser";
import { routes } from "src/common/routes/routes";

const PosDashboardNavigateSlice = () => {
    const { roleType, is_organization_owner } = useCurrentUser();
    const navigate = useNavigate();

    const handleOnClick = () => { 
        navigate(routes.admin.dashboard.fullPath);
    }

    if (is_organization_owner || roleType === 'dashboardAndPos')
        return (
            <div className="btn btn-ghost bg-base-200 justify-between mb-1 text-slate-800" onClick={handleOnClick}>
                <span>Dashboard</span>
                <i className='fi fi-rr-desktop-wallpaper h-6 text-xl'></i>
            </div>
        )
    return <></>
};

export default PosDashboardNavigateSlice;
