export const AdminTableTableConstants = {
    number: "number",
    branch: "branch",
};

type TableTableKeys = keyof typeof AdminTableTableConstants;
type TableTableValues = (typeof AdminTableTableConstants)[TableTableKeys];

export const AdminTableTableHeaderConstants: TableTableValues[] =
    Object.values(AdminTableTableConstants);
