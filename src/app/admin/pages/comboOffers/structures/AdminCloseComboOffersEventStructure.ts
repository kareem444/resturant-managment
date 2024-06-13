import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";

export const OnComboOfferModalCloseEvent = (): { click: () => void } => {
    const { resetComboOfferProducts } = useComboOfferUiReducer();
    return {
        click: () => resetComboOfferProducts(),
    };
};
