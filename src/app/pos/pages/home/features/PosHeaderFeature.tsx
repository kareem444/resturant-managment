import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const DemoNames = [
    'pizza',
    'burger',
    'pasta',
    'salad',
    'sushi',
    'steak',
    'fish',
    'chicken',
    'dessert'
]

export default function PosHeaderFeature() {
    return (
        <div className='navbar bg-base-100 rounded-2xl'>
            <div className='flex flex-col items-center justify-center py-3 bg-cyan-600 rounded-2xl w-2/12 shadow-md '>
                <div className='text-xl font-bol text-white cursor-pointer '>All</div>
            </div>
            <div className='divider divider-horizontal'></div>
            <Swiper
                spaceBetween={10}
                className=''
                slidesPerView={DemoNames.length > 4 ? 4 : DemoNames.length}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => {}}
            >
                {DemoNames.map((name, index) => {
                    return (
                        <SwiperSlide key={index} className='bg-cyan-500 rounded-3xl cursor-pointer'>
                            <div className='flex flex-col items-center justify-center py-3 pointer-events-auto'>
                                <div className='text-xl font-bold text-white'>{name}</div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
