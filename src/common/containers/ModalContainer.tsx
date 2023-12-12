import useModalReducer from '../redux/modal/useModalReducer'
import { PosModalStructure } from '../../app/pos/structure/PosModalStructure'
import { AdminModalStructure } from '../../app/admin/structure/AdminModalStructure'
import { ObjectKeys } from 'react-hook-form/dist/types/path/common'

const modalComponents = {
    ...PosModalStructure,
    ...AdminModalStructure
}

export type ModalComponentsKeys = ObjectKeys<typeof modalComponents>

function ModalLayoutContainer() {
    const { state, closeModal } = useModalReducer()
    return (
        <>
            {/* Put this part before </body> tag */}
            <div className={`modal ${state.isOpen && 'modal-open'}`}>
                <div className={`modal-box max-w-${state.size} ${state.className}`}>
                    {state.xButton?.showXButton && (
                        <button
                            className={
                                'btn btn-sm btn-circle absolute right-2 top-2 bg-base-300 border-base-300 hover:bg-base-200 hover:border-base-200 text-info-content dark:text-base-content' +
                                ' bg-red-500 ' +
                                state.xButton.className
                            }
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    )}
                    {!!state.title && (
                        <h3
                            className={
                                'font-semibold text-2xl pb-6 text-center' +
                                ' ' +
                                state.title.className
                            }
                        >
                            {state.title.text}
                        </h3>
                    )}
                    {!!state.modalComponent && modalComponents[state.modalComponent]}
                    {(state.closeButton?.showCloseButton ||
                        (state.buttons && state.buttons?.length > 0)) && (
                            <div className='flex gap-4 mt-3'>
                                {state.closeButton?.showCloseButton && (
                                    <button
                                        className={
                                            'btn btn-outline flex-1 mt-4' +
                                            ' ' +
                                            state.closeButton?.className
                                        }
                                        onClick={closeModal}
                                    >
                                        {state.closeButton?.text ?? 'Close'}
                                    </button>
                                )}
                                {state.buttons?.map((button, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={
                                                'btn hover:bg-red-700 bg-red-900 border-none text-white flex-1 mt-4' + ' ' + button.className
                                            }
                                            onClick={button.onClick}
                                        >
                                            {button.text ?? 'Submit'}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default ModalLayoutContainer
