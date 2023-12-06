import SetRoutesContainer from '../../../common/containers/SetRoutesContainer'
import PosDrawerContainer from './PosDrawerContainer'
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon'
import { PosRoutes } from '../routes/PosRoutes'
import { useEffect } from 'react'

function PosPageContainer() {
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', "winter");
        localStorage.setItem('theme', 'winter')
    }, [])
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
                <SetRoutesContainer routes={PosRoutes.withoutOrderSection} />
            </div>
            <div className='drawer-side'>
                <label htmlFor='left-sidebar-drawer' className='drawer-overlay'></label>
                <PosDrawerContainer />
            </div>
        </div>
    )
}

export default PosPageContainer
