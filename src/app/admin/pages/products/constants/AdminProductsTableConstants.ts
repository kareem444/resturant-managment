export const AdminProductsTableConstants = {
    name: "name",
    branch: "branch",
    group: "group",
    code: "code",
    productType: "productType",
    price: "price",
};

type ProductsTableKeys = keyof typeof AdminProductsTableConstants;
type ProductsTableValues = (typeof AdminProductsTableConstants)[ProductsTableKeys];

export const AdminProductsTableHeaderConstants: ProductsTableValues[] =
    Object.values(AdminProductsTableConstants);
