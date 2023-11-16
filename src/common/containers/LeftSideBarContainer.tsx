import { sideBarRoutes } from '../constants/sideBarConstants'
import { NavLink, Link, useLocation } from 'react-router-dom'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SideBarSubMenuContainer from './SideBarSubMenuContainer'
import { useTranslate } from '../hooks/useTranslate'
import { TRANSLATE } from '../constants/translateConstants'
import { IMAGE_SRC } from '../constants/imageConstants'

function LeftSidebarContainer() {
    const location = useLocation()
    const { translate } = useTranslate()

    const close = () => {
        document.getElementById('left-sidebar-drawer')?.click()
    }

    return (
        <div className='drawer-side'>
            <label htmlFor='left-sidebar-drawer' className='drawer-overlay'></label>
            <ul className='menu  pt-2 w-80 bg-base-100 text-base-content'>
                <button
                    className='btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden'
                    onClick={() => close()}
                >
                    <XMarkIcon className='h-5 inline-block w-5' />
                </button>

                <li className='mb-2 font-semibold text-xl'>
                    {/* //TODO: Add a link to the welcome page */}

                    <Link to={'/app/welcome'}>
                        <img
                            className='mask mask-squircle w-10'
                            src={IMAGE_SRC.logo}
                            alt='DashWind Logo'
                        />
                        {translate(TRANSLATE.APP_NAME)}
                    </Link>
                </li>
                {sideBarRoutes.map((route, k) => {
                    return (
                        <li key={k}>
                            {
                                route.submenu ?
                                    <SideBarSubMenuContainer {...route} /> :
                                    <NavLink
                                        end
                                        to={route.path}
                                        className={({ isActive }) =>
                                            `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'
                                            }`
                                        }
                                    >
                                        {route.icon} {translate(route.name)}
                                        {location.pathname === route.path ? (
                                            <span
                                                className='absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary '
                                                aria-hidden='true'
                                            ></span>
                                        ) : null}
                                    </NavLink>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LeftSidebarContainer
