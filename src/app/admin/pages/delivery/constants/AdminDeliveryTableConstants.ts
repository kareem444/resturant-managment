export const AdminDeliveryTableConstants = {
    name: "name",
    branch: "branch",
    mobile: "mobile",
};

type DeliveryTableKeys = keyof typeof AdminDeliveryTableConstants;
type DeliveryTableValues = (typeof AdminDeliveryTableConstants)[DeliveryTableKeys];

export const AdminDeliveryTableHeaderConstants: DeliveryTableValues[] =
    Object.values(AdminDeliveryTableConstants);
