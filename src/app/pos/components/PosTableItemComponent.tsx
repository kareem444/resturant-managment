import { FC } from 'react'

interface PosTableItemComponentProps {
    tableNumber: string
    time?: string
    className?: string
}

const PosTableItemComponent: FC<PosTableItemComponentProps> = ({
    tableNumber,
    time,
    className
}) => {
    return (
        <div
            className={
                'card bg-white shadow-xl cursor-pointer h-36 flex flex-col justify-center items-center gap-3' +
                ' ' +
                className
            }
        >
            <span className='text-4xl font-bold'>{tableNumber}</span>
            {!!time && (
                <span className='flex flex-row justify-center items-center gap-1'>
                    <i className='fi fi-sr-time-oclock h-5'></i>
                    <span>{time}</span>
                </span>
            )}
        </div>
    )
}

export default PosTableItemComponent
