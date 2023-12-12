import { IModalState } from "./ModalInterface";

export const ModalInitialState: IModalState = {
    isOpen: false,
    modalComponent: undefined,
    title: undefined,
    size: "md",
    className: "",
    xButton: {
        showXButton: true,
        className: "",
    },
    closeButton: {
        showCloseButton: false,
        className: "",
        text: undefined,
    },
    buttons: undefined,
};