import { FilterItem } from "src/common/components/FilterComponent";
import { AdminGroupTableConstants } from "./AdminGroupTableConstants";
import { AdminGroupInputsConstants } from "./AdminGroupInputsConstants";

export const AdminGroupFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminGroupTableConstants.name,
        value: AdminGroupInputsConstants.name,
    }
]