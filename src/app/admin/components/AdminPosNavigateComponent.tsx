import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "src/common/hooks/useCurrentUser";
import { routes } from "src/common/routes/routes";

interface AdminPosNavigateComponentProps {
  isButton?: boolean;
}

const AdminPosNavigateComponent: FC<AdminPosNavigateComponentProps> = ({
  isButton = true,
}) => {
  const { roleType, isOrganizationOwner } = useCurrentUser();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.pos.home.products.fullPath);
  };

  if (isOrganizationOwner || roleType === "dashboardAndPos") {
    if (isButton) {
      return (
        <div
          className="flex items-center btn btn-ghost btn-circle"
          onClick={handleClick}
        >
          <i className="fi fi-rr-computer h-7 text-2xl"></i>
        </div>
      );
    } else {
      return (
        <li className="md:hidden" onClick={handleClick}>
          <a className="hover:bg-blue-600 hover:text-white cursor-pointer flex justify-between">
            <span>Pos</span>
            <span>
              <i className="fi fi-rr-computer h-7 text-2xl"></i>
            </span>
          </a>
        </li>
      );
    }
  }

  return <></>;
};

export default AdminPosNavigateComponent;
