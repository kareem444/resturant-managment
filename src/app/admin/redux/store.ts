import ProductReducer from "../pages/products/redux/ProductUiSlice";
import ComboOfferReducer from "../pages/comboOffers/redux/ComboOfferUiSlice";
import DiscountUiReducer from "../pages/discounts/redux/DiscountUiSlice";

export const adminReducer = {
    productUi: ProductReducer,
    comboOfferUi: ComboOfferReducer,
    discountUi: DiscountUiReducer
}

