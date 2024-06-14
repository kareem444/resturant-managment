import { FilterItem } from "src/common/components/FilterComponent";
import { AdminDiscountsTableConstants } from "./AdminDiscountsTableConstants";
import { AdminDiscountsInputsConstants } from "./AdminDiscountsInputsConstants";

export const AdminDiscountsFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminDiscountsTableConstants.name,
        value: AdminDiscountsInputsConstants.name,
    },
    {
        name: AdminDiscountsTableConstants.amount,
        value: AdminDiscountsInputsConstants.amount!,
    },
    {
        name: AdminDiscountsTableConstants.availableDiscounts,
        value: AdminDiscountsInputsConstants.availableDiscounts!,
    },
]