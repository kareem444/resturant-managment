import PosOrderItemsFeature from 'src/app/pos/pages/home/features/PosOrderItemsFeature'
import PosOrderTotalPayFeature from './PosOrderTotalPayFeature'
import PosOrderControlButtonsFeature from './PosOrderControlButtonsFeature'
import PosOrderTopButtonsFeature from './PosOrderTopButtonsFeature'

export default function PosOrderFeature() {
    return (
        <div className='card bg-white h-full p-4 grid grid-rows-6 pb-8'>
            <div className='row-span-4'>
                <PosOrderTopButtonsFeature />
                <div className='overflow-y-scroll no-scrollbar w-full h-5/6'>
                    <PosOrderItemsFeature />
                </div>
            </div>
            <div className='w-full flex flex-col row-span-3 mt-auto'>
                <PosOrderControlButtonsFeature />
                <PosOrderTotalPayFeature />
                <button className='btn w-full btn-info text-white bg-cyan-500 rounded-2xl flex justify-between'>
                    <span>Total</span>
                    <span>Rb. 1020.45</span>
                </button>
            </div>
        </div>
    )
}
