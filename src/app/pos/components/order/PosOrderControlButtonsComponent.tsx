import {ReactComponent as ReceiptIcon} from '../../../../common/assets/svg/receipt.svg';

const PosOrderControlButtonsComponent = () => {
    return (
        <div className='flex justify-between bg-cyan-500 p-1 rounded-2xl text-white'>
            <div className='btn btn-ghost '>
                <i className="fi fi-rr-hat-chef text-2xl hover:scale-105" />
            </div>
            <div className='btn btn-ghost'>
                <i className="fi fi-br-percentage text-xl hover:scale-105" />
            </div>
            <div className='btn btn-ghost'>
                <ReceiptIcon className='h-12 w-7' />
            </div>
            <div className='btn btn-ghost'>
                <i className="fi fi-rr-user text-2xl hover:scale-105" />
            </div>
        </div>
    )
};

export default PosOrderControlButtonsComponent;
