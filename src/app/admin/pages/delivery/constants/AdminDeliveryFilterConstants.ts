import { FilterItem } from "src/common/components/FilterComponent";
import { AdminDeliveryTableConstants } from "./AdminDeliveryTableConstants";
import { AdminDeliveryInputsConstants } from "./AdminDeliveryInputsConstants";

export const AdminDeliveryFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminDeliveryTableConstants.name,
        value: AdminDeliveryInputsConstants.name,
    },
    {
        name: AdminDeliveryTableConstants.mobile,
        value: AdminDeliveryInputsConstants.mobile!,
    },
]