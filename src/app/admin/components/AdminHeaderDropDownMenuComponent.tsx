import { IMAGE_SRC } from "../../../common/constants/SrcConstants";
import { Link } from "react-router-dom";
import SwitchThemeComponent from "../../../common/components/SwitchTheme";
import SwitchLanguageComponent from "../../../common/components/SwitchLanguageComponent";
import { useTranslate } from "../../../common/hooks/useTranslate";
import useCurrentUser from "src/common/hooks/useCurrentUser";
import AdminPosNavigateComponent from "./AdminPosNavigateComponent";

export default function HeaderDropDownMenuComponent() {
  const { isArabic } = useTranslate();
  const { deleteCurrentUser } = useCurrentUser();

  return (
    <div
      className={`dropdown ml-4 ${isArabic ? "dropdown-right" : "dropdown-end"
        }`}
    >
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={IMAGE_SRC.logo} alt="profile" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className={`menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 ${isArabic ? "mt-16 !left-0" : "mt-3"
          }`}
      >
        <AdminPosNavigateComponent isButton={false} />
        <li>
          <Link
            to={"/app/admin/settings"}
            className="hover:bg-blue-600 hover:text-white flex justify-between items-center"
          >
            <span>Settings</span>
            <i className="fi fi-rr-settings text-2xl"></i>
          </Link>
        </li>
        <li>
          <a
            className={
              "hover:bg-base-100 flex justify-between items-center cursor-default" +
              " " +
              (isArabic ? "!pl-1" : "!pr-1")
            }
          >
            <span>Language</span>
            <span>
              <SwitchLanguageComponent />
            </span>
          </a>
        </li>
        <li>
          <a className="hover:bg-base-100 flex justify-between cursor-default">
            <span>Mode</span>
            <span>
              <SwitchThemeComponent />
            </span>
          </a>
        </li>
        <div className="divider mt-0 mb-0"></div>
        <li>
          <a onClick={deleteCurrentUser}>Logout</a>
        </li>
      </ul>
    </div>
  );
}
