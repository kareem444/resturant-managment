import { SideBarRoute } from "../routes/AdminDrawerRoutes";
import { NavLink, useLocation } from "react-router-dom";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import SideBarSubMenuContainer from "../../../common/containers/SideBarSubMenuContainer";
import { useTranslate } from "../../../common/hooks/useTranslate";
import { TRANSLATE } from "../../../common/constants/TranslateConstants";
import { IMAGE_SRC } from "../../../common/constants/SrcConstants";
import { memo, useState } from "react";
import { removeDashFromRoutNameHelper } from "src/common/helper/routesHelper";

function AdminDrawerContainer({
    routes,
}: {
    routes: SideBarRoute[] | undefined;
}) {
    const location = useLocation();
    const { translate, isArabic } = useTranslate();

    const [expandedMenuIndex, setExpandedMenuIndex] = useState(-1);

    const close = () => {
        document.getElementById("left-sidebar-drawer")?.click();
    };

    return (
        <ul className="menu pt-2 w-80 bg-base-100 text-base-content border dark:border-none">
            <button
                className={
                    "btn btn-ghost bg-base-300  btn-circle z-50 top-0 mt-4 absolute lg:hidden" +
                    " " +
                    (isArabic ? "left-0 ml-2" : "right-0 mr-2")
                }
                onClick={() => close()}
            >
                <XMarkIcon className="h-5 inline-block w-5" />
            </button>
            <li className="mb-2 font-semibold text-xl">
                <a className="bg-inherit active:text-inherit cursor-default">
                    <img
                        className="mask mask-squircle w-10"
                        src={IMAGE_SRC.logo}
                        alt={translate(TRANSLATE.APP_NAME)}
                    />
                    {translate(TRANSLATE.APP_NAME)}
                </a>
            </li>
            {routes?.map((route, index) => {
                if (route.submenu) {
                    if (route.submenu.length === 0) return null;
                    return (
                        <li key={index}>
                            <SideBarSubMenuContainer
                                {...route}
                                isMenuExpanded={expandedMenuIndex === index}
                                index={index}
                                setExpandedMenuIndex={setExpandedMenuIndex}
                                onClick={() => {
                                    setExpandedMenuIndex(
                                        expandedMenuIndex === index ? -1 : index
                                    );
                                }}
                            />
                        </li>
                    );
                } else {
                    return (
                        <li key={index}>
                            <NavLink
                                end
                                to={route.path}
                                className={({ isActive }) => {
                                    return (
                                        "active:bg-inherit active:dark:text-white active:text-inherit"
                                        + " " +
                                        (isActive ? "font-semibold bg-blue-600 text-white active:bg-blue-600 active:text-white" : "")
                                    )
                                }
                                }
                            >
                                {route.icon}
                                {translate(removeDashFromRoutNameHelper(route.name))}
                            </NavLink>
                        </li>
                    );
                }
            })}
        </ul>
    );
}

export default memo(AdminDrawerContainer);
