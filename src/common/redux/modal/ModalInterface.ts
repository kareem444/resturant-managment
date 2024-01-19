import { ModalComponentsKeys, ModalEventsKeys } from "src/common/containers/ModalContainer";

export type IModalSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "max";

export interface IModalState {
    isOpen?: boolean;
    modalComponent: ModalComponentsKeys | undefined;
    className?: string;
    size?: IModalSizes;
    title?: {
        text?: string;
        className?: string;
    };
    xButton?: {
        className?: string;
        showXButton?: boolean;
    };
    closeButton?: {
        text?: string;
        className?: string;
        showCloseButton?: boolean;
    };
    buttons?: {
        text?: string;
        className?: string;
        onClick?: ModalEventsKeys | undefined;
    }[];
    onClose?: ModalEventsKeys | undefined;
}