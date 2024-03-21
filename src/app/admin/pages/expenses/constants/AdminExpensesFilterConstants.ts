import { FilterItem } from "src/common/components/FilterComponent";
import { AdminExpensesTableConstants } from "./AdminExpensesTableConstants";
import { AdminExpensesInputsConstants } from "./AdminExpensesInputsConstants";

export const AdminExpensesFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminExpensesTableConstants.name,
        value: AdminExpensesInputsConstants.name,
    },
]