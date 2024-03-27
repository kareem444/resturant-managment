import useModalReducer from '../redux/modal/useModalReducer'
import { PosModalStructure } from '../../app/pos/structure/PosModalStructure'
import { AdminModalComponentsStructure } from '../../app/admin/structure/modal/AdminModalComponentsStructure'
import { ObjectKeys } from 'react-hook-form/dist/types/path/common'
import { AdminModalEventsStructure } from 'src/app/admin/structure/modal/AdminModalEventsStructure'
import { TRANSLATE } from '../constants/TranslateConstants'
import { useTranslate } from '../hooks/useTranslate'

const modalComponents = {
    ...PosModalStructure,
    ...AdminModalComponentsStructure
}

const modalEvents = {
    ...AdminModalEventsStructure
}

export type ModalComponentsKeys = ObjectKeys<typeof modalComponents>
export type ModalEventsKeys = ObjectKeys<typeof modalEvents>

const Button = ({
    className,
    onClick,
    text
}: {
    className?: string
    onClick?: ModalEventsKeys
    text?: string
}) => {
    const { closeModal } = useModalReducer()
    const onClickEvent = modalEvents[onClick || 'onDeleteProductModalDelete']()

    const handelOnClick = () => {
        closeModal()
        if (onClick) {
            onClickEvent?.click()
        }
    }

    return (
        <button
            className={
                'btn hover:bg-red-700 bg-red-900 border-none text-white flex-1 mt-4' +
                ' ' +
                className
            }
            onClick={handelOnClick}
        >
            {text ?? 'Submit'}
        </button>
    )
}

function ModalLayoutContainer() {
    const { state, closeModal } = useModalReducer()

    const onCloseEvent = modalEvents[state.onClose || 'onProductModalClose']()

    const handelMaxWidth = (): string => {
        const sizes = [
            { name: 'sm', value: '24rem' },
            { name: 'md', value: '28rem' },
            { name: 'lg', value: '32rem' },
            { name: 'xl', value: '36rem' },
            { name: '2xl', value: '42rem' },
            { name: '3xl', value: '48rem' },
            { name: '4xl', value: '56rem' },
            { name: '5xl', value: '64rem' },
            { name: '6xl', value: '72rem' },
            { name: '7xl', value: '80rem' }
        ]
        const size = sizes.find(size => size.name === state.size)
        return size?.value ?? '32rem'
    }

    const handelOnClose = () => {
        closeModal()
        if (state.onClose) {
            onCloseEvent?.click()
        }
    }
    const { translate } = useTranslate();
    return (
        <>
            <div
                className={`modal ${state.isOpen && 'modal-open'}`}
                onClick={() => state.isOpen && handelOnClose()}
            >
                <div
                    className={`modal-box no-scrollbar` + ` ${state.className} `}
                    style={{ maxWidth: handelMaxWidth() }}
                    onClick={e => e.stopPropagation()}
                >
                    {state.xButton?.showXButton && (
                        <button
                            className={
                                'btn btn-sm btn-circle absolute right-2 top-2 bg-base-300 border-base-300 hover:bg-base-200 hover:border-base-200 text-info-content dark:text-base-content' +
                                ' bg-red-500 ' +
                                state.xButton.className
                            }
                            onClick={handelOnClose}
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
                                        onClick={handelOnClose}
                                    >
                                        {state.closeButton?.text ?? translate(TRANSLATE.CLOSE)}
                                    </button>
                                )}
                                {state.buttons?.map((button, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            className={button.className}
                                            onClick={button.onClick}
                                            text={button.text}
                                        />
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
