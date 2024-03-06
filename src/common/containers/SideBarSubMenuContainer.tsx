import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'
import { FC, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SideBarRoute } from '../../app/admin/routes/AdminDrawerRoutes'
import { useTranslate } from '../hooks/useTranslate'

interface SideBarSubMenuContainerProps extends SideBarRoute {
    isMenuExpanded?: boolean
    setExpandedMenuIndex?: (index: number) => void
    index?: number
    onClick?: () => void
}

const SideBarSubMenuContainer: FC<SideBarSubMenuContainerProps> = ({
    submenu,
    name,
    icon,
    isMenuExpanded = false,
    index = 0,
    setExpandedMenuIndex,
    onClick
}) => {
    const location = useLocation()
    const { translate } = useTranslate()

    /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
    useEffect(() => {
        if (
            submenu?.filter(m => {
                return m.path === location.pathname
            })[0]
        ) {
            setExpandedMenuIndex && setExpandedMenuIndex(index)
        }
    }, [])

    return (
        <div className="flex-col bg-inherit text-inherit">
            {/** Route header */}
            <div
                className="w-full flex justify-between"
                onClick={() => {
                    onClick && onClick()
                }}
            >
                <span>
                    {icon} {translate(name)}
                </span>
                {isMenuExpanded ? (
                    <MinusIcon
                        className={
                            'w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ' +
                            (isMenuExpanded ? 'rotate-180' : '')
                        }
                    />
                ) : (
                    <PlusIcon
                        className={
                            'w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ' +
                            (isMenuExpanded ? 'rotate-180' : '')
                        }
                    />
                )}
            </div>

            {/** Submenu list */}
            <div className={` w-full ` + (isMenuExpanded ? '' : 'hidden')}>
                <ul className={`menu-compact bg-inherit text-inherit`}>
                    {submenu?.map((m, k) => {
                        return (
                            <li key={k} className="bg-inherit">
                                <NavLink
                                    to={m.path}
                                    className={({ isActive }) =>
                                        "active:bg-inherit active:text-slate-900 dark:active:text-gray-200 rounded-sm"
                                        +
                                        " " +
                                        `${isActive ? "font-semibold !bg-blue-600 text-white" : " font-normal"
                                        }`
                                    }
                                >
                                    {m.icon} {translate(m.name)}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBarSubMenuContainer
