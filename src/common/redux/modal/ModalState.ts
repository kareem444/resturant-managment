import { IModalState } from "./ModalInterface";

export const ModalInitialState: IModalState = {
    isOpen: false,
    Element: null,
    title: "",
    size: "md",
    className: "",
    closeButtonClassName: "",
    titleClassName: "",
};