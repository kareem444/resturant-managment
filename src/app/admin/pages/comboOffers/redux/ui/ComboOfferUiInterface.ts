import { IComboOfferProduct } from "../../interfaces/AdminComboOfferInterface";

export interface IComboOfferUiState {
    productsToAdd?: IComboOfferProduct[];
    productsToEdit?: IComboOfferProduct[];
}