import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import usePageTitle from '../../../common/hooks/usePageTitle'
import NotificationButtonComponent from '../components/AdminNotificationButtonComponent'
import HeaderDropDownMenuComponent from '../components/AdminHeaderDropDownMenuComponent'

function AdminHeaderContainer() {
    const { title } = usePageTitle()

    return (
        <>
            <div className='navbar  flex justify-between bg-base-100  z-10 shadow-md '>
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

                    {/* Notification icon */}
                    <NotificationButtonComponent />

                    {/* Profile icon, opening menu on click */}
                    <HeaderDropDownMenuComponent />
                </div>
            </div>
        </>
    )
}

export default AdminHeaderContainer
