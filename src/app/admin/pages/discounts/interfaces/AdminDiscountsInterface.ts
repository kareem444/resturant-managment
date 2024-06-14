export interface IAdminDiscountsInputs {
    name: string;
    amount?: string;
    discountType?: AdminDiscountType;
    branchId?: string;
    availableDiscounts?: string;
    applyTo?: AdminDiscountApplyTo;
    startDate?: string;
    endDate?: string;
}

export interface IAdminRefactoredDiscountsInputs extends IAdminDiscountsInputs {
    productsIds?: string[];
    customersIds?: string[];
}

export type AdminDiscountApplyTo =
    | "order"
    | "product"
    | "customer"
    | "order-product"
    | "order-customer"
    | "product-customer"
    | "order-product-customer";

export type AdminDiscountType = "ratio" | "amount";

export interface IAdminDiscountsApplyToValues {
    id: AdminDiscountApplyTo;
    name: string;
}

export interface IAdminDiscountsTypeValues {
    id: AdminDiscountType;
    name: string;
}
