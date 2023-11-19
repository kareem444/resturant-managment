import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import usePageTitle from '../../../common/hooks/usePageTitle'
import NotificationButtonComponent from '../components/AdminNotificationButtonComponent'
import HeaderDropDownMenuComponent from '../components/AdminHeaderDropDownMenuComponent'

function AdminHeaderContainer() {
    const { title } = usePageTitle()

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

                    {/* <select className="select select-sm mr-4" data-choose-theme>
                        <option disabled selected>Theme</option>
                        <option value="light">Default</option>
                        <option value="dark">Dark</option>
                        <option value="corporate">Corporate</option>
                        <option value="retro">Retro</option>
                        <option value="bumblebee">Bumblebee</option>
                        <option value="winter">Winter</option>
                        <option value="night">Night</option>
                        <option value="acid">Acid</option>
                        <option value="business">Business</option>
                        <option value="cmyk">Cmyk</option>
                        <option value="luxury">luxury</option>
                        <option value="black">black</option>
                        <option value="wireframe">wireframe</option>
                        <option value="fantasy">fantasy</option>
                        <option value="pastel">pastel</option>
                        <option value="lofi">lofi</option>
                        <option value="aqua">aqua</option>
                        <option value="forest">forest</option>
                        <option value="garden">garden</option>
                        <option value="halloween">halloween</option>
                        <option value="valentine">valentine</option>
                        <option value="cyberpunk">cyberpunk</option>
                        <option value="synthwave">synthwave</option>
                        <option value="emerald">emerald</option>
                        <option value="cupcake">cupcake</option>
                    </select> */}

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
