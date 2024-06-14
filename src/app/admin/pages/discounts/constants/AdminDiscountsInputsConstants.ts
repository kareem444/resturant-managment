import { IAdminDiscountsApplyToValues, IAdminDiscountsInputs, IAdminDiscountsTypeValues } from "../interfaces/AdminDiscountsInterface";

export const AdminDiscountsInputsConstants: { [K in keyof IAdminDiscountsInputs]: K } = {
    amount: 'amount',
    applyTo: 'applyTo',
    availableDiscounts: 'availableDiscounts',
    branchId: 'branchId',
    discountType: 'discountType',
    endDate: 'endDate',
    name: 'name',
    startDate: 'startDate'
};

export const AdminDiscountTypesConstants: IAdminDiscountsTypeValues[] = [
    { id: 'ratio', name: 'Ratio (%)' },
    { id: 'amount', name: 'Amount (SAR)' }
]

export const AdminDiscountApplyToConstants: IAdminDiscountsApplyToValues[] = [
    { id: 'order', name: 'Order' },
    { id: 'product', name: 'Product' },
    { id: "customer", name: 'Customer' },
    { id: "order-product", name: 'Order & Product' },
    { id: "order-customer", name: 'Order & Customer' },
    { id: "product-customer", name: 'Product & Customer' },
    { id: "order-product-customer", name: 'Order & Product & Customer' },
]