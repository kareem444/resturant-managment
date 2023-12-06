import useModalReducer from 'src/common/redux/modal/useModalReducer'
import PosSubmitPaymentModalComponent from '../modal/PosSubmitPaymentModalComponent'

const PosOrderSubmitButtonComponent = () => {
    const { openModel } = useModalReducer()

    const onClick = () => {
        openModel({
            size: '3xl',
            title: 'Submit Payment',
            Element: <PosSubmitPaymentModalComponent />,
            isOpen: true
        })
    }

    return (
        <button
            className='btn w-full btn-info text-white bg-cyan-500 rounded-2xl flex justify-between'
            onClick={onClick}
        >
            <span>Total Pay</span>
            <span>Rb. 1020.45</span>
        </button>
    )
}

export default PosOrderSubmitButtonComponent
