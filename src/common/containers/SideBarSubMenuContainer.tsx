import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'
import { FC, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SideBarRoute } from '../../app/admin/routes/AdminDrawerRoutes'
import { useTranslate } from '../hooks/useTranslate'

const SideBarSubMenuContainer: FC<SideBarRoute> = ({ submenu, name, icon }) => {
    const location = useLocation()
    const [isExpanded, setIsExpanded] = useState(false)
    const { translate } = useTranslate()

    /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
    useEffect(() => {
        if (
            submenu?.filter(m => {
                return m.path === location.pathname
            })[0]
        )
            setIsExpanded(true)
    }, [])

    return (
        <div className='flex-col active:bg-base-100 hover:bg-base-200 active:dark:text-white active:text-accent-content'>
            {/** Route header */}
            <div className='w-full' onClick={() => setIsExpanded(!isExpanded)} >
                {icon} {translate(name)}
                {isExpanded ? (
                    <MinusIcon
                        className={
                            'w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ' +
                            (isExpanded ? 'rotate-180' : '')
                        }
                    />
                ) : (
                    <PlusIcon
                        className={
                            'w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ' +
                            (isExpanded ? 'rotate-180' : '')
                        }
                    />
                )}
            </div>

            {/** Submenu list */}
            <div className={` w-full ` + (isExpanded ? '' : 'hidden')}>
                <ul className={`menu-compact`}>
                    {submenu?.map((m, k) => {
                        return (
                            <li
                                key={k}
                                className='active:bg-base-100 hover:bg-base-100 active:dark:text-white active:text-accent-content'
                            >
                                <NavLink
                                    to={m.path}
                                    className={({ isActive }) =>
                                        `${isActive ? 'font-semibold  bg-base-200 ' : ' font-normal'
                                        }` +
                                        ' active:bg-base-300 active:dark:text-white active:text-accent-content'
                                    }
                                >
                                    {m.icon} {translate(m.name)}
                                    {location.pathname == m.path ? (
                                        <span
                                            className='absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-accent '
                                            aria-hidden='true'
                                        ></span>
                                    ) : null}
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
