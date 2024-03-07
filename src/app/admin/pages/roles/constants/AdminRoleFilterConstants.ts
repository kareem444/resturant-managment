import { FilterItem } from "src/common/components/FilterComponent";
import { AdminRoleInputsConstants } from "./AdminRoleInputsConstants";
import { AdminRoleTableConstants } from "./AdminRoleTableConstants";

export const AdminRoleFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminRoleTableConstants.name,
        value: AdminRoleInputsConstants.name,
    },
]