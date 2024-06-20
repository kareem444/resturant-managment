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

export default function PosProductsHeaderFeature() {
    return (
        <>
            <div className='p-2 flex bg-base-100 rounded-2xl shadow-sm'>
                <div className='text-center py-2 bg-cyan-500 rounded-2xl w-2/12 '>
                    <div className='text-lg text-white cursor-pointer'>All</div>
                </div>
                <div className='divider divider-horizontal mx-2'></div>
                <Swiper
                    spaceBetween={10}
                    className=''
                    slidesPerView={DemoNames.length > 4 ? 4 : DemoNames.length}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => { }}
                >
                    {DemoNames.map((name, index) => {
                        return (
                            <SwiperSlide key={index} className='bg-cyan-500 rounded-2xl cursor-pointer'>
                                <div className='text-lg text-center py-2 text-white'>
                                    {
                                        name.length < 15 ? name : name.slice(0, 15) + '..'
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}
