export const AdminCustomerTableConstants = {
    name: "name",
    mobile: "mobile",
    taxNumber: "taxNumber",
    address: "address",
    date: "date"
};

type CustomerTableKeys = keyof typeof AdminCustomerTableConstants;
type CustomerTableValues = (typeof AdminCustomerTableConstants)[CustomerTableKeys];

export const AdminCustomerTableHeaderConstants: CustomerTableValues[] =
    Object.values(AdminCustomerTableConstants);
