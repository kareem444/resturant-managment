export const AdminTaxTableConstants = {
    name: "name",
    branch: "branch",
    amount: "amount",
    minAmount: "minAmount",
};

type TaxTableKeys = keyof typeof AdminTaxTableConstants;
type TaxTableValues = (typeof AdminTaxTableConstants)[TaxTableKeys];

export const AdminTaxTableHeaderConstants: TaxTableValues[] =
    Object.values(AdminTaxTableConstants);
