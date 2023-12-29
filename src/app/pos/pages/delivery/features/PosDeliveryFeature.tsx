import { BRANDS_SRC } from 'src/common/constants/SrcConstants'
import { RECENT_TRANSACTIONS } from 'src/common/utils/dummyData'

const PosDeliveryFeature = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[
                RECENT_TRANSACTIONS[0],
                RECENT_TRANSACTIONS[1],
                RECENT_TRANSACTIONS[2],
                ...BRANDS_SRC
            ].map((item, index) => (
                <div className='card bg-white shadow-xl cursor-pointer h-52' key={index}>
                    <figure className='p-3 h-5/6'>
                        <img
                            src={item.avatar}
                            alt='Shoes'
                            className='w-full h-full rounded-lg'
                        />
                    </figure>
                    <span className='text-center my-2'>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default PosDeliveryFeature
