export const AdminUnitTableConstants = {
    name: "name",
    date: "date"
};

type UnitTableKeys = keyof typeof AdminUnitTableConstants;
type UnitTableValues = (typeof AdminUnitTableConstants)[UnitTableKeys];

export const AdminUnitTableHeaderConstants: UnitTableValues[] =
    Object.values(AdminUnitTableConstants);
