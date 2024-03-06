import { FilterItem } from "src/common/components/FilterComponent";
import { AdminBranchTableConstants } from "./AdminBranchTableConstants";
import { AdminBranchInputsConstants } from "./AdminBranchInputsConstants";

export const AdminBranchFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminBranchTableConstants.name,
        value: AdminBranchInputsConstants.name,
    },
    {
        name: AdminBranchTableConstants.branchCode,
        value: AdminBranchInputsConstants.branchCode,
    }
]