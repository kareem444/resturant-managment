import { useAppDispatch, useAppSelector } from '../redux/store'
import { modalState } from '../redux/modal/ModalSelectors'
import { closeModalAction } from '../redux/modal/ModalSlice'

function ModalLayoutContainer() {
    const { isOpen, Element, size, title } = useAppSelector(modalState)
    const dispatch = useAppDispatch()

    return (
        <>
            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
                <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                    <button
                        className='btn btn-sm btn-circle absolute right-2 top-2'
                        onClick={() => dispatch(closeModalAction())}
                    >
                        ✕
                    </button>
                    <h3 className='font-semibold text-2xl pb-6 text-center'>{title}</h3>

                    {/* Loading modal body according to different modal type */}
                    {Element && Element}
                </div>
            </div>
        </>
    )
}

export default ModalLayoutContainer
