import { FilterItem } from "src/common/components/FilterComponent";
import { AdminCustomerTableConstants } from "./AdminCustomerTableConstants";
import { AdminCustomerInputsConstants } from "./AdminCustomerInputsConstants";

export const AdminCustomerFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminCustomerTableConstants.name,
        value: AdminCustomerInputsConstants.name,
    },
    {
        name: AdminCustomerTableConstants.mobile,
        value: AdminCustomerInputsConstants.mobile,
    }
]