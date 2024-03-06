export const AdminBranchTableConstants = {
    name: "name",
    branchCode: "branch code",
    address: "address",
    startTime: "startTime",
    endTime: "endTime",
};

type BranchTableKeys = keyof typeof AdminBranchTableConstants;
type BranchTableValues = (typeof AdminBranchTableConstants)[BranchTableKeys];

export const AdminBranchTableHeaderConstants: BranchTableValues[] =
    Object.values(AdminBranchTableConstants);
