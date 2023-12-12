import { PosDrawerRoutes } from '../routes/PosDrawerRoutes'
import PosIconNavLinkComponent from 'src/app/pos/components/PosIconNavLinkComponent'
import PosIconButtonComponent from '../components/PosIconButtonComponent'
import { routes } from 'src/common/routes/routes'
import PosLogoComponent from '../components/PosLogoComponent'
import { PosRoutes } from '../routes/PosRoutes'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import OnlineStateComponent from 'src/common/components/OnlineStateComponent'

function PosDrawerContainer() {
    const { openModel } = useModalReducer()

    const openShiftModal = () => {
        openModel({
            size: 'sm',
            title: {
                text: 'Shift'
            },
            className: 'bg-base-300',
            closeButton: {
                className: 'btn btn-outline btn-sm'
            },
            modalComponent: 'posShiftModalComponent',
            isOpen: true
        })
    }

    return (
        <ul className='menu w-28 bg-cyan-500 rounded-3xl m-3 ml-0 sm:ml-2 shadow-lg border-gray-300 border'>
            <PosLogoComponent path={PosRoutes.withOrderSection.products.fullPath} />
            <ul className='flex flex-col justify-between h-5/6'>
                <ul className=''>
                    {PosDrawerRoutes.map((route, k) => (
                        <PosIconNavLinkComponent key={k} {...route} />
                    ))}
                    <PosIconButtonComponent
                        icon='fi-rr-power'
                        onClick={openShiftModal}
                    />
                </ul>
                <div>
                    <li>
                        <OnlineStateComponent />
                    </li>
                    <PosIconNavLinkComponent
                        path={routes.pos.settings.fullPath}
                        icon={<i className='fi fi-rr-settings text-2xl' />}
                    />
                </div>
            </ul>
        </ul>
    )
}

export default PosDrawerContainer
