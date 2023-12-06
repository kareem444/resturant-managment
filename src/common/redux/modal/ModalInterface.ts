export interface IModalState {
    isOpen: boolean;
    Element: JSX.Element | null;
    title: string;
    className?: string;
    closeButtonClassName?: string;
    titleClassName?: string;
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "max";
}