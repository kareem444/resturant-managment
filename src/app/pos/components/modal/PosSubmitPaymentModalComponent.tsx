import { PAYMENTS_WAY_SRC } from 'src/common/constants/SrcConstants';

const PosSubmitPaymentModalComponent = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {[
                    ...PAYMENTS_WAY_SRC
                ].map((item, index) => (
                    <div className='card bg-slate-500 shadow-xl cursor-pointer text-white' key={index}>
                        <figure className='p-3 h-5/6'>
                            <img
                                src={item.avatar}
                                alt='Shoes'
                                className='w-full h-24 rounded-lg'
                            />
                        </figure>
                        <span className='text-center my-2'>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='btn mt-4 w-full bg-cyan-500 border-none hover:bg-cyan-400 text-white'>submit</div>
        </>
    )
};

export default PosSubmitPaymentModalComponent;
