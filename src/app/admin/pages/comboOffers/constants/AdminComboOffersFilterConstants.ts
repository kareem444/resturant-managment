import { FilterItem } from "src/common/components/FilterComponent";
import { AdminComboOffersTableConstants } from "./AdminComboOffersTableConstants";
import { AdminComboOffersInputsConstants } from "./AdminComboOffersInputsConstants";

export const AdminComboOffersFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminComboOffersTableConstants.name,
        value: AdminComboOffersInputsConstants.name,
    },
]