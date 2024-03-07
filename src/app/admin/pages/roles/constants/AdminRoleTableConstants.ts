export const AdminRoleTableConstants = {
    name: "name",
    roleType: "role type",
    date : 'date'
};

type RoleTableKeys = keyof typeof AdminRoleTableConstants;
type RoleTableValues = (typeof AdminRoleTableConstants)[RoleTableKeys];

export const AdminRoleTableHeaderConstants: RoleTableValues[] =
    Object.values(AdminRoleTableConstants);
