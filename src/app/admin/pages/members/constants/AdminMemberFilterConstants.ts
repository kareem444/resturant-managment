import { FilterItem } from "src/common/components/FilterComponent";
import { AdminMemberTableConstants } from "./AdminMemberTableConstants";
import { AdminMemberInputsConstants } from "./AdminMemberInputsConstants";

export const AdminMemberFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminMemberTableConstants.name,
        value: AdminMemberInputsConstants.name,
    },
    {
        name: AdminMemberTableConstants.password,
        value: AdminMemberInputsConstants.password,
    },
    {
        name: AdminMemberTableConstants.mobile,
        value: AdminMemberInputsConstants.mobile ?? '',
    },
]