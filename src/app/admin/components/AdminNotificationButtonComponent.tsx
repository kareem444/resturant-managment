import BellIcon from '@heroicons/react/24/outline/BellIcon'
import useRightBarReducer from '../../../common/redux/rightDrawer/useRightDrawerReducer'

export default function NotificationButtonComponent() {
    const { openRightDrawer } = useRightBarReducer()

    const openNotification = () => {
        openRightDrawer({
            isOpen: true,
            title: 'Notifications',
            Element: <div>Notification</div>
        })
    }

    return (
        <button
            className='btn btn-ghost btn-circle'
            onClick={() => openNotification()}
        >
            <div className='indicator'>
                <BellIcon className='h-6 w-6' />
                {<span className="indicator-item badge badge-secondary badge-sm animate-pulse"></span>}
            </div>
        </button>
    )
}
