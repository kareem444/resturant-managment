export const AdminPaymentMethodTableConstants = {
    avatar: "avatar",
    name: "name",
};

type PaymentMethodTableKeys = keyof typeof AdminPaymentMethodTableConstants;
type PaymentMethodTableValues = (typeof AdminPaymentMethodTableConstants)[PaymentMethodTableKeys];

export const AdminPaymentMethodTableHeaderConstants: PaymentMethodTableValues[] =
    Object.values(AdminPaymentMethodTableConstants);
