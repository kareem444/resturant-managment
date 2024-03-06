import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import {
    ModalComponentsKeys,
    ModalEventsKeys
} from 'src/common/containers/ModalContainer'
import usePageTitle from 'src/common/hooks/usePageTitle'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { IModalSizes } from 'src/common/redux/modal/ModalInterface'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

const AdminModalActionsStructure = () => {
    const { openModel } = useModalReducer()
    const { title, titleWithoutLetterS, titleWithoutLetterES } = usePageTitle()

    const { translate } = useTranslate()

    const handelTitle = (formatTitle: 'none' | 's' | 'es' = 's') => {
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
        openAddModal: (
            modalComponent: ModalComponentsKeys,
            {
                size,
                title,
                formatTitle,
                onClose
            }: {
                title?: string
                formatTitle?: 'none' | 's' | 'es'
                size?: IModalSizes
                onClose?: ModalEventsKeys | undefined
            } = {}
        ) => {
            openModel({
                modalComponent,
                size: size ?? '3xl',
                title: {
                    text: title ?? `${translate(TRANSLATE.ADD)} ${handelTitle(formatTitle)}`
                },
                onClose
            })
        },
        openEditModal: (
            modalComponent: ModalComponentsKeys,
            {
                size,
                title,
                formatTitle,
                onClose
            }: {
                title?: string
                formatTitle?: 'none' | 's' | 'es'
                size?: IModalSizes
                onClose?: ModalEventsKeys | undefined
            } = {}
        ) => {
            openModel({
                modalComponent,
                size: size ?? '3xl',
                title: {
                    text: title ?? `${translate(TRANSLATE.EDIT)} ${handelTitle(formatTitle)}`
                },
                onClose
            })
        },
        openDeleteModal: (
            modalComponent: ModalComponentsKeys,
            onDelete: ModalEventsKeys,
            {
                title,
                formatTitle,
                size,
                onClose
            }: {
                title?: string
                formatTitle?: 'none' | 's' | 'es'
                size?: IModalSizes
                onClose?: ModalEventsKeys | undefined
            } = {}
        ) => {
            openModel({
                modalComponent,
                size: size ?? 'sm',
                title: {
                    text: title ?? `${translate(TRANSLATE.DELETE)} ${handelTitle(formatTitle)}`
                },
                closeButton: {
                    showCloseButton: true
                },
                onClose,
                buttons: [
                    {
                        text: translate(TRANSLATE.DELETE),
                        onClick: onDelete,
                    }
                ]
            })
        }
    }
}

export default AdminModalActionsStructure
