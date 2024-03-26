export interface IAdminProductsInputs {
    name: string
    code: string
    productType: 'fixed' | 'multi'
    price?: string
    image?: File
    branchId?: string
    groupId?: string
    taxesIds?: string
    additionsIds?: string
}

export interface IAdminRefactoredProductsInputs extends Omit<IAdminProductsInputs, "taxesIds" | "additionsIds"> {
    taxesIds?: string[];
    additionsIds?: string[];
    sizes?: {
        size: string;
        price: string;
    }[];
}