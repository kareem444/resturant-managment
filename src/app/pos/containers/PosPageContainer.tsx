import { routes } from '../../../common/routes/routes'
import SetRoutesContainer from '../../../common/containers/SetRoutesContainer'
import PosDrawerContainer from './PosDrawerContainer'
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon'

function PosPageContainer() {
    return (
        <div className='drawer drawer-mobile bg-base-200 text-slate-500' data-theme="winter">
            <input
                id='left-sidebar-drawer'
                type='checkbox'
                className='drawer-toggle'
            />
            <div className='drawer-content flex flex-col h-screen'>
                <label htmlFor="left-sidebar-drawer" className="drawer-button lg:hidden z-50">
                    <ChevronRightIcon className='w-10 p-1 absolute top-1/3 bg-cyan-500 rounded-lg text-white' />
                </label>
                <SetRoutesContainer routes={routes.pos} />
            </div>
            <div className='drawer-side'>
                <label htmlFor='left-sidebar-drawer' className='drawer-overlay'></label>
                <PosDrawerContainer />
            </div>
        </div>
    )
}

export default PosPageContainer
