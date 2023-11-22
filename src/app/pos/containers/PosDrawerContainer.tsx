import { PosDrawerRoutes } from '../routes/PosDrawerRoutes'
import IconNavLinkComponent from 'src/common/components/IconNavLinkComponent'
import PosIconButtonComponent from '../components/PosIconButtonComponent'
import { routes } from 'src/common/routes/routes'
import PosLogoComponent from '../components/PosLogoComponent'
import { PosRoutes } from '../routes/PosRoutes'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

function PosDrawerContainer() {
    const { openModel } = useModalReducer()
    return (
        <ul className='menu w-28 bg-cyan-500 rounded-3xl m-3 ml-0 sm:ml-2'>
            <PosLogoComponent path={PosRoutes.withOrderSection.products.fullPath} />
            <ul className='flex flex-col justify-between h-5/6'>
                <ul className=''>
                    {PosDrawerRoutes.map((route, k) => <IconNavLinkComponent key={k} {...route} />)}
                    <PosIconButtonComponent icon='fi-rr-power' onClick={() => {
                        openModel({
                            size: 'lg',
                            title: 'Shift',
                            Element: <div>Shift Modal</div>,
                            isOpen: true
                        })
                    }} />
                </ul>
                <IconNavLinkComponent path={routes.pos.settings.fullPath} icon={<i className='fi fi-rr-settings text-2xl' />} />
            </ul>
        </ul>
    )
}

export default PosDrawerContainer
