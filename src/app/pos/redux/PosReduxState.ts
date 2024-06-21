import { IPosState } from "./PosReduxInterface";

export const PosInitialState: IPosState = {
    app: {
        isLoading: false,
        showProductOrCombo: 'product',
        loadingText: {
            show: false,
            percent: undefined,
            text: '',
            showDots: false
        }
    },
    data: {
        groups: [],
        products: [],
        comboOffers: [],
        tables: [],
        delivery: [],
        discounts: [],
        paymentsMethods: [],
        customers: []
    }
};