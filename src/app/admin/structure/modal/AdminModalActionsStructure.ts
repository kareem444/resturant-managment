import {
    ModalComponentsKeys,
    ModalEventsKeys
} from 'src/common/containers/ModalContainer'
import usePageTitle from 'src/common/hooks/usePageTitle'
import { IModalSizes } from 'src/common/redux/modal/ModalInterface'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

const AdminModalActionsStructure = () => {
    const { openModel } = useModalReducer()
    const { title, titleWithoutLetterS, titleWithoutLetterES } = usePageTitle()

    const handelTitle = (formatTitle: 'none' | 's' | 'es') => {
        switch (formatTitle) {
            case 's':
                return titleWithoutLetterS
            case 'es':
                return titleWithoutLetterES
            default:
                return title
        }
    }

    return {
        openEditModal: (
            modalComponent: ModalComponentsKeys,
            {
                size,
                title,
                formatTitle
            }: {
                title?: string
                formatTitle?: 'none' | 's' | 'es'
                size?: IModalSizes
            } = {}
        ) => {
            openModel({
                modalComponent,
                size: size ?? '3xl',
                title: {
                    text: title ?? `Edit ${handelTitle(formatTitle ?? 'es')}`
                }
            })
        },
        openDeleteModal: (
            modalComponent: ModalComponentsKeys,
            {
                title,
                formatTitle,
                onClick,
                size
            }: {
                title?: string
                formatTitle?: 'none' | 's' | 'es'
                onClick?: ModalEventsKeys
                size?: IModalSizes
            } = {}
        ) => {
            openModel({
                modalComponent,
                size: size ?? 'sm',
                title: {
                    text: title ?? `Delete ${handelTitle(formatTitle ?? 'es')}`
                },
                closeButton: {
                    showCloseButton: true
                },
                buttons: [
                    {
                        text: 'Delete',
                        onClick
                    }
                ]
            })
        }
    }
}

export default AdminModalActionsStructure
