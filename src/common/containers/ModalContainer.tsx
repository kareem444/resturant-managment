import useModalReducer from '../redux/modal/useModalReducer'

function ModalLayoutContainer() {
    const { state, closeModal } = useModalReducer()

    return (
        <>
            {/* Put this part before </body> tag */}
            <div className={`modal ${state.isOpen ? 'modal-open' : ''}`}>
                <div className={`modal-box max-w-${state.size}`}>
                    <button
                        className='btn btn-sm btn-circle absolute right-2 top-2 bg-base-300 border-base-300 hover:bg-base-200 hover:border-base-200 text-info-content dark:text-base-content'
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    <h3 className='font-semibold text-2xl pb-6 text-center'>
                        {state.title}
                    </h3>

                    {/* Loading modal body according to different modal type */}
                    {state.Element && state.Element}
                </div>
            </div>
        </>
    )
}

export default ModalLayoutContainer
