import { FilterItem } from "src/common/components/FilterComponent";
import { AdminAdditionsTableConstants } from "./AdminAdditionsTableConstants";
import { AdminAdditionsInputsConstants } from "./AdminAdditionsInputsConstants";

export const AdminAdditionsFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminAdditionsTableConstants.name,
        value: AdminAdditionsInputsConstants.name,
    },
]