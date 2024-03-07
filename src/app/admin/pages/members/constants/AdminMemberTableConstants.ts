export const AdminMemberTableConstants = {
    name: "name",
    mobile: "mobile",
    email: "email",
    password: "password",
    branch: "branch",
    role: "role",
};

type MemberTableKeys = keyof typeof AdminMemberTableConstants;
type MemberTableValues = (typeof AdminMemberTableConstants)[MemberTableKeys];

export const AdminMemberTableHeaderConstants: MemberTableValues[] =
    Object.values(AdminMemberTableConstants);
