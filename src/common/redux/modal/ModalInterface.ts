import { ModalComponentsKeys } from "src/common/containers/ModalContainer";

export interface IModalState {
    isOpen?: boolean;
    modalComponent: ModalComponentsKeys | undefined;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "max";
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
    buttons? : {
        text?: string;
        className?: string;
        onClick?: () => void;
    }[];
}