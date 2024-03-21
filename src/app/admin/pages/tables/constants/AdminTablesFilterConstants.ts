import { FilterItem } from "src/common/components/FilterComponent";
import { AdminTableTableConstants } from "./AdminTablesTableConstants";
import { AdminTableInputsConstants } from "./AdminTablesInputsConstants";

export const AdminTableFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminTableTableConstants.number,
        value: AdminTableInputsConstants.number,
    },
]