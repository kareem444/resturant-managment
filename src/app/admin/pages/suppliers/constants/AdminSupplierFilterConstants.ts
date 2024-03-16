import { FilterItem } from "src/common/components/FilterComponent";
import { AdminSupplierTableConstants } from "./AdminSupplierTableConstants";
import { AdminSupplierInputsConstants } from "./AdminSupplierInputsConstants";

export const AdminSupplierFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminSupplierTableConstants.name,
        value: AdminSupplierInputsConstants.name,
    },
    {
        name: AdminSupplierTableConstants.address,
        value: AdminSupplierInputsConstants.address,
    },
    {
        name: AdminSupplierTableConstants.phone,
        value: AdminSupplierInputsConstants.phone,
    },
    {
        name: AdminSupplierTableConstants.taxNumber,
        value: AdminSupplierInputsConstants.taxNumber,
    },
]