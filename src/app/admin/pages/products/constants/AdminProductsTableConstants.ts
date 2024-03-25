export const AdminProductsTableConstants = {
    name: "name",
    branch: "branch",
    mobile: "mobile",
};

type ProductsTableKeys = keyof typeof AdminProductsTableConstants;
type ProductsTableValues = (typeof AdminProductsTableConstants)[ProductsTableKeys];

export const AdminProductsTableHeaderConstants: ProductsTableValues[] =
    Object.values(AdminProductsTableConstants);
