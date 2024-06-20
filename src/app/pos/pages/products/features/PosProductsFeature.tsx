import SwipingHorizontalEffectComponent from 'src/common/components/SwipingHorizontalEffectComponent'
import { RECENT_TRANSACTIONS } from 'src/common/utils/dummyData'

const PosProductsFeature = () => {
    return (
        <SwipingHorizontalEffectComponent
            onSwipeFromLeft={() => console.log('swipe from left')}
            onSwipeFromRight={() => console.log('swipe from right')}
        >
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-1'>
                {RECENT_TRANSACTIONS.map((item, index) => (
                    <div
                        className='card bg-white shadow-sm cursor-pointer h-48'
                        key={index}
                    >
                        <figure className='p-3 h-5/6'>
                            <img
                                src={item.avatar}
                                alt='Shoes'
                                className='w-full h-full rounded-lg'
                            />
                        </figure>
                        <div className='card-body flex-row justify-between p-4'>
                            <span>{item.name}</span>
                            <span className='font-bold'>Rp. 24.244</span>
                        </div>
                    </div>
                ))}
            </div>
        </SwipingHorizontalEffectComponent>
    )
}

export default PosProductsFeature
