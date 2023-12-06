import NumpadComponent from 'src/common/components/NumpadComponent'

const PosShiftModalComponent = () => {
    return (
        <>
            {true ? (
                <>
                    <NumpadComponent
                        onChange={result => console.log(result)}
                        buttonClassName='py-5 !px-0'
                    />
                    <button className='bg-white text-slate-500 rounded-lg p-5 w-full mt-4 font-bold'>
                        Open Shift
                    </button>
                </>
            ) : (
                <>
                    <div className='bg-white rounded-lg p-3 w-full mt-4 text-2xl font-bold text-center'>
                        Are you sure you want to close the shift?
                    </div>
                    <div className='flex justify-between mt-4 gap-4'>
                        <button className='bg-cyan-500 text-white rounded-lg p-3 w-full font-bold'>
                            Close
                        </button>
                        <button className='bg-slate-500 text-white rounded-lg p-3 w-full font-bold'>
                            No
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default PosShiftModalComponent
