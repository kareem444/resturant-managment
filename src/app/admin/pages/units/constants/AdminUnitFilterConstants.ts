import { FilterItem } from "src/common/components/FilterComponent";
import { AdminUnitTableConstants } from "./AdminUnitTableConstants";
import { AdminUnitInputsConstants } from "./AdminUnitInputsConstants";

export const AdminUnitFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminUnitTableConstants.name,
        value: AdminUnitInputsConstants.name,
    }
]