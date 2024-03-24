export const AdminAdditionsTableConstants = {
    name: "name",
    price: "price",
};

type AdditionsTableKeys = keyof typeof AdminAdditionsTableConstants;
type AdditionsTableValues = (typeof AdminAdditionsTableConstants)[AdditionsTableKeys];

export const AdminAdditionsTableHeaderConstants: AdditionsTableValues[] =
    Object.values(AdminAdditionsTableConstants);
