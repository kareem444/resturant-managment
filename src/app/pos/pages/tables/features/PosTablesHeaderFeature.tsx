import DropDownComponent from 'src/common/components/DropDownComponent';
import { ReactComponent as BusyIcon } from '../../../../../common/assets/svg/busy.svg'
import { ReactComponent as CheckIcon } from '../../../../../common/assets/svg/check.svg'
import { ReactComponent as IntermittentFastingIcon } from '../../../../../common/assets/svg/intermittent-fasting.svg'

const items = [
    {
        text: 'item 1'
    },
    {
        text: 'item 2'
    },
    {
        text: 'item 3'
    },
    {
        text: 'item 4'
    },
]

const PosTablesHeaderFeature = () => {
    return (
        <div className='card bg-white p-2 px-3 flex-row justify-between'>
            <DropDownComponent placeHolder='Table type' items={items} />
            <div className='w-1/3 flex flex-row justify-end'>
                <div className='btn btn-ghost'>
                    <IntermittentFastingIcon
                        className='h-12 w-12'
                        fill='rgb(100, 116, 139)'
                    />
                </div>
                <div className='btn btn-ghost'>
                    <BusyIcon className='h-12 w-9' fill='rgb(100, 116, 139)' />
                </div>
                <div className='btn btn-ghost'>
                    <CheckIcon className='h-12 w-9' fill='#06b6d4' />
                </div>
            </div>
        </div>
    )
};

export default PosTablesHeaderFeature;
