export const AdminComboOffersTableConstants = {
    name: "name",
    code: "code",
    productsAmount: "productsAmount",
};

type ComboOffersTableKeys = keyof typeof AdminComboOffersTableConstants;
type ComboOffersTableValues = (typeof AdminComboOffersTableConstants)[ComboOffersTableKeys];

export const AdminComboOffersTableHeaderConstants: ComboOffersTableValues[] =
    Object.values(AdminComboOffersTableConstants);
