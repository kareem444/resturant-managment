import ProductReducer from "../pages/products/redux/ui/ProductUiSlice";
import ComboOfferReducer from "../pages/comboOffers/redux/ui/ComboOfferUiSlice";

export const adminReducer = {
    productUi: ProductReducer,
    comboOfferUi: ComboOfferReducer,
}

