import useModalReducer from 'src/common/redux/modal/useModalReducer'
import { ReactComponent as ReceiptIcon } from '../../../../common/assets/svg/receipt.svg'

const PosOrderControlButtonsComponent = () => {
    const { openModel } = useModalReducer()
    const openDiscountModal = () => {
        openModel({
            size: '2xl',
            title: {
                text: 'Discount',
                className: 'text-slate-500'
            },
            modalComponent: 'posDiscountModalComponent',
            isOpen: true
        })
    }

    const openCustomerModal = () => {
        openModel({
            size: '3xl',
            title: {
                text: 'Customer',
                className: 'text-slate-500'
            },
            modalComponent: 'posCustomerModalComponent',
            isOpen: true
        })
    }

    return (
        <div className='flex justify-between bg-cyan-500 p-1 rounded-2xl text-white'>
            <div className='btn btn-ghost '>
                <i className='fi fi-rr-hat-chef text-2xl hover:scale-105' />
            </div>
            <div
                className='btn btn-ghost'
                onClick={openDiscountModal}
            >
                <i className='fi fi-br-percentage text-xl hover:scale-105' />
            </div>
            <div className='btn btn-ghost'>
                <ReceiptIcon className='h-12 w-7' />
            </div>
            <div
                className='btn btn-ghost'
                onClick={openCustomerModal}
            >
                <i className='fi fi-rr-user text-2xl hover:scale-105' />
            </div>
        </div>
    )
}

export default PosOrderControlButtonsComponent
