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
        <ul className='menu bg-cyan-500 rounded-2xl flex flex-col shadow-sm h-full'>
            <PosLogoComponent path={PosRoutes.withOrderSection.products.fullPath} />
            <ul className='flex flex-col justify-between flex-1'>
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
