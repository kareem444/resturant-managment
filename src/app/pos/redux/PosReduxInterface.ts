import { IPosData, IPosLoadingText, IPosProductOrCombo } from "../interfaces";

export interface IPosAppState {
    isLoading: boolean;
    loadingText: IPosLoadingText;
    showProductOrCombo: IPosProductOrCombo;
}

export interface IPosState {
    app: IPosAppState;
    data: IPosData;
}
