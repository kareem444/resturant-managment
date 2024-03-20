import { FilterItem } from "src/common/components/FilterComponent";
import { AdminTaxTableConstants } from "./AdminTaxesTableConstants";
import { AdminTaxInputsConstants } from "./AdminTaxesInputsConstants";

export const AdminTaxFilterConstants: [FilterItem, ...FilterItem[]] = [
    {
        name: AdminTaxTableConstants.name,
        value: AdminTaxInputsConstants.name,
    },
]