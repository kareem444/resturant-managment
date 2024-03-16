import { FilterItem } from "src/common/components/FilterComponent";
import { AdminExpensesDestinationTableConstants } from "./AdminExpensesDestinationTableConstants";
import { AdminExpensesDestinationInputsConstants } from "./AdminExpensesDestinationInputsConstants";

export const AdminExpensesDestinationFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminExpensesDestinationTableConstants.name,
        value: AdminExpensesDestinationInputsConstants.name,
    }
]