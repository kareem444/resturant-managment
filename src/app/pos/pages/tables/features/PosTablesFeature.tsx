import PosTableItemComponent from 'src/app/pos/components/PosTableItemComponent'
import useLongPress from 'beautiful-react-hooks/useLongPress';

const PosTablesFeature = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {['1', '2', '3', '4'].map((number, index) => (
                <PosTableItemComponent key={index} tableNumber={number} />
            ))}
            {['1', '2', '3', '4'].map((number, index) => (
                <PosTableItemComponent
                    key={index}
                    tableNumber={number}
                    className='bg-slate-600 text-white'
                />
            ))}
            {['1', '2', '3', '4'].map((number, index) => (
                <PosTableItemComponent
                    key={index}
                    tableNumber={number}
                    time='12:00'
                    className='bg-red-900 text-white'
                />
            ))}
        </div>
    )
}

export default PosTablesFeature
