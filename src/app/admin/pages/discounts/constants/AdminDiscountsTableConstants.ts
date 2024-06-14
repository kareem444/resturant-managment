export const AdminDiscountsTableConstants = {
    name: "name",
    branch: "branch",
    amount: "amount",
    discountType: "discountType",
    availableDiscounts: "availableDiscounts",
};

type DiscountsTableKeys = keyof typeof AdminDiscountsTableConstants;
type DiscountsTableValues = (typeof AdminDiscountsTableConstants)[DiscountsTableKeys];

export const AdminDiscountTableHeaderConstants: DiscountsTableValues[] =
    Object.values(AdminDiscountsTableConstants);
