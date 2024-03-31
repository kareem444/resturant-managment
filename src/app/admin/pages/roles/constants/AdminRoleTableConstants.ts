export const AdminRoleTableConstants = {
    name: "name",
    roleType: "roleType",
    date : 'date'
};

type RoleTableKeys = keyof typeof AdminRoleTableConstants;
type RoleTableValues = (typeof AdminRoleTableConstants)[RoleTableKeys];

export const AdminRoleTableHeaderConstants: RoleTableValues[] =
    Object.values(AdminRoleTableConstants);
