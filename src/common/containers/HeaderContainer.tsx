import { themeChange } from 'theme-change'
import { useEffect, useState } from 'react'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import { IMAGE_SRC } from '../constants/imageConstants'
import { useTranslate } from '../hooks/useTranslate'
import SwitchButtonComponent from '../components/SwitchButtonComponent'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { openRightDrawerAction } from '../redux/rightDrawer/RightDrawerSlice'
import usePageTitle from '../hooks/usePageTitle'

function HeaderContainer() {
    const { toggleEnAr, translate, isArabic } = useTranslate()
    const dispatch = useAppDispatch()
    // const { noOfNotifications, pageTitle } = useSelector(state => state.header)
    const { title } = usePageTitle()
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme')
    )

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                setCurrentTheme('dark')
            } else {
                setCurrentTheme('light')
            }
        }
        // 👆 false parameter is required for react project
    }, [])

    // Opening right sidebar for notification
    const openNotification = () => {
        dispatch(
            openRightDrawerAction({
                title: 'Notifications',
                isOpen: true,
                Element: <div>Notification</div>
            })
        )
    }

    function logoutUser() {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <>
            <div className='navbar  flex justify-between bg-base-100  z-10 shadow-md '>
                {/* Menu toogle for mobile view or small screen */}
                <div className=''>
                    <label
                        htmlFor='left-sidebar-drawer'
                        className='btn btn-primary drawer-button lg:hidden'
                    >
                        <Bars3Icon className='h-5 inline-block w-5' />
                    </label>
                    {title && <h1 className='text-2xl font-semibold ml-2'>{title}</h1>}
                </div>

                <div className='order-last'>
                    {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection, 
                also includes corporate and retro themes in tailwind.config file */}

                    {/* <select className="select select-sm mr-4" data-choose-theme>
                        <option disabled selected>Theme</option>
                        <option value="light">Default</option>
                        <option value="dark">Dark</option>
                        <option value="corporate">Corporate</option>
                        <option value="retro">Retro</option>
                    </select> */}

                    <SwitchButtonComponent
                        name='switchLang'
                        defaultValue={isArabic}
                        onSwitch={toggleEnAr}
                        containerStyle='mx-4'
                        label={{
                            title: translate('language'),
                            labelStyle: 'text-base-content mx-2'
                        }}
                    />

                    {/* Light and dark theme selection toogle **/}
                    <label className='swap '>
                        <input type='checkbox' />
                        <SunIcon
                            data-set-theme='light'
                            data-act-class='ACTIVECLASS'
                            className={
                                'fill-current w-6 h-6 ' +
                                (currentTheme === 'dark' ? 'swap-on' : 'swap-off')
                            }
                        />
                        <MoonIcon
                            data-set-theme='dark'
                            data-act-class='ACTIVECLASS'
                            className={
                                'fill-current w-6 h-6 ' +
                                (currentTheme === 'light' ? 'swap-on' : 'swap-off')
                            }
                        />
                    </label>

                    {/* Notification icon */}
                    <button
                        className='btn btn-ghost ml-4  btn-circle'
                        onClick={() => openNotification()}
                    >
                        <div className='indicator'>
                            <BellIcon className='h-6 w-6' />
                            {<span className="indicator-item badge badge-secondary badge-sm animate-pulse"></span>}
                        </div>
                    </button>

                    {/* Profile icon, opening menu on click */}
                    <div className='dropdown dropdown-end ml-4'>
                        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                            <div className='w-10 rounded-full'>
                                <img src={IMAGE_SRC.logo} alt='profile' />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li className='justify-between'>
                                <Link to={'/app/settings-profile'}>
                                    Profile Settings
                                    <span className='badge'>New</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link to={'/app/settings-billing'}>Bill History</Link>
                            </li>
                            <div className='divider mt-0 mb-0'></div>
                            <li>
                                <a onClick={logoutUser}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContainer
