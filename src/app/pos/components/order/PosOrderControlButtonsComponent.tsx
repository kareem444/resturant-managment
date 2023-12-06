import useModalReducer from 'src/common/redux/modal/useModalReducer'
import { ReactComponent as ReceiptIcon } from '../../../../common/assets/svg/receipt.svg'
import PosDiscountModalComponent from '../modal/discount/PosDiscountModalComponent'
import PosCustomerModalComponent from '../modal/customer/PosCustomerModalComponent'

const PosOrderControlButtonsComponent = () => {
    const { openModel } = useModalReducer()
    return (
        <div className='flex justify-between bg-cyan-500 p-1 rounded-2xl text-white'>
            <div className='btn btn-ghost '>
                <i className='fi fi-rr-hat-chef text-2xl hover:scale-105' />
            </div>
            <div
                className='btn btn-ghost'
                onClick={() => {
                    openModel({
                        size: '2xl',
                        title: 'Discount',
                        titleClassName: 'text-slate-500',
                        Element: <PosDiscountModalComponent />,
                        isOpen: true
                    })
                }}
            >
                <i className='fi fi-br-percentage text-xl hover:scale-105' />
            </div>
            <div className='btn btn-ghost'>
                <ReceiptIcon className='h-12 w-7' />
            </div>
            <div
                className='btn btn-ghost'
                onClick={() => {
                    openModel({
                        size: '3xl',
                        title: 'Customer',
                        titleClassName: 'text-slate-500',
                        Element: <PosCustomerModalComponent />,
                        isOpen: true
                    })
                }}
            >
                <i className='fi fi-rr-user text-2xl hover:scale-105' />
            </div>
        </div>
    )
}

export default PosOrderControlButtonsComponent
