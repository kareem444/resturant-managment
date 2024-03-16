export const AdminSupplierTableConstants = {
    name: "Name",
    address: "Address",
    phone: "Phone",
    taxNumber: "Tax Number",
    date: "Date"
};

type SupplierTableKeys = keyof typeof AdminSupplierTableConstants;
type SupplierTableValues = (typeof AdminSupplierTableConstants)[SupplierTableKeys];

export const AdminSupplierTableHeaderConstants: SupplierTableValues[] =
    Object.values(AdminSupplierTableConstants);
