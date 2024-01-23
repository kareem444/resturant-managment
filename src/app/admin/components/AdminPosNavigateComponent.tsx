import { useNavigate } from "react-router-dom";
import useCurrentUser from "src/common/hooks/useCurrentUser";
import { routes } from "src/common/routes/routes";

const AdminPosNavigateComponent = () => {
  const { roleType, is_organization_owner } = useCurrentUser();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.pos.home.products.fullPath);
  };

  if (is_organization_owner || roleType === "dashboardAndPos")
    return (
      <div className="flex items-center btn btn-ghost btn-circle" onClick={handleClick}>
        <i className="fi fi-rr-computer h-7 text-2xl"></i>
      </div>
    )

  return <></>
};

export default AdminPosNavigateComponent;
