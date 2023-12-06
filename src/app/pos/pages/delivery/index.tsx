import PosDeliveryHeaderFeature from './features/PosDeliveryHeaderFeature'
import PosDeliveryFeature from './features/PosDeliveryFeature'


export default function PosDeliveryPage() {
    return (
        <>
            <div className='my-4'>
                <PosDeliveryHeaderFeature />
            </div>

            <div className='overflow-y-scroll h-5/6 no-scrollbar'>
                <PosDeliveryFeature />
            </div>
        </>
    )
}
