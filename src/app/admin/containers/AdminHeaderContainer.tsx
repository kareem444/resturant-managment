import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import usePageTitle from '../../../common/hooks/usePageTitle'
import HeaderDropDownMenuComponent from '../components/AdminHeaderDropDownMenuComponent'
import AdminPosNavigateComponent from '../components/AdminPosNavigateComponent'

function AdminHeaderContainer() {
    const { title } = usePageTitle()

    return (
        <div className='navbar  flex justify-between bg-base-100  z-10 shadow-md '>
            <div>
                <label
                    htmlFor='left-sidebar-drawer'
                    className='btn btn-ghost bg-blue-600 text-white drawer-button lg:hidden'
                >
                    <Bars3Icon className='h-5 inline-block w-5' />
                </label>
                {title && <h1 className='text-2xl font-semibold mx-2'>{title}</h1>}
            </div>

            <div className='order-last gap-4'>
                <div className='hidden md:block'>
                    <AdminPosNavigateComponent />
                </div>
                <HeaderDropDownMenuComponent />
            </div>
        </div>
    )
}

export default AdminHeaderContainer
