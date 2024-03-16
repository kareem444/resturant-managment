import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminMemberInputs } from "../pages/members/interfaces/AdminMembersInterface";
import { IRoleTypes } from "../pages/roles/interfaces/AdminRoleInterface";

export interface IAdminMemberModel
    extends IAppModel,
    Omit<IAdminMemberInputs, "branchId" | "roleId"> {
    branch?: {
        id: string;
        name: string;
    };
    role?: {
        id: string;
        name: string;
        roleType: IRoleTypes;
    };
}
