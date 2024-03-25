import { FilterItem } from "src/common/components/FilterComponent";
import { AdminProductsTableConstants } from "./AdminProductsTableConstants";
import { AdminProductsInputsConstants } from "./AdminProductsInputsConstants";

export const AdminProductsFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminProductsTableConstants.name,
        value: AdminProductsInputsConstants.name,
    },
]