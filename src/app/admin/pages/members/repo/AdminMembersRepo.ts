import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper"
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants"
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper"
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel"
import { IAdminMemberInputs } from "../interfaces/AdminMembersInterface"
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo"
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel"
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel"
import { AdminRolesRepo } from "../../roles/repo/AdminRolesRepo"
import { IRoleTypes } from "../../roles/interfaces/AdminRoleInterface"
import { ErrorsConstants } from "src/common/constants/ErrorsConstants"

export class AdminMembersRepo {
    static createMember = (member: IAdminMemberInputs): Promise<IAdminMemberModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const roles: IAdminRoleModel[] = await AdminRolesRepo.getRoles();

            const branch = branches?.find(branch => branch.id === member.branchId);
            const role = roles?.find(role => role.id === member.roleId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            if (!role) {
                throw ErrorsConstants.ROLE_NOT_EXIST;
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.MEMBERS,
                member,
                { isAuthGuard: true }
            )

            return {
                ...member,
                id,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                },
                role: {
                    id: role?.id as string,
                    name: role?.name as string,
                    roleType: role?.role as IRoleTypes
                }
            }
        })
    }

    static getMembers = async (): Promise<IAdminMemberModel[] | undefined> => {
        return AsyncHelper.createPromise(async () => {
            const members: (IAdminMemberInputs & IAdminMemberModel)[] | undefined = await FireStoreHelper.find(
                FireStoreCollectionsConstants.MEMBERS,
                { isAuthGuard: true, orderBy: [{ field: 'createdAt', direction: 'desc' }] }
            )
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const roles: IAdminRoleModel[] = await AdminRolesRepo.getRoles();

            const refactorMembers = members?.map(member => {
                if (!!member.branchId) {
                    const branch = branches?.find(branch => branch.id === member.branchId);

                    if (branch) {
                        member.branch = {
                            id: branch?.id as string,
                            name: branch?.name as string
                        };
                    }

                    delete member.branchId;
                }

                if (!!member.roleId) {
                    const role = roles?.find(role => role.id === member.roleId);

                    if (role) {
                        member.role = {
                            id: role?.id as string,
                            name: role?.name as string,
                            roleType: role?.role as IRoleTypes
                        };
                    }

                    delete member.roleId;
                }

                return member
            })

            return refactorMembers as IAdminMemberModel[]
        })
    }

    static updateMember = (memberId: string, member: IAdminMemberInputs): Promise<IAdminMemberModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            const roles: IAdminRoleModel[] = await AdminRolesRepo.getRoles();

            const branch = branches?.find(branch => branch.id === member.branchId);
            const role = roles?.find(role => role.id === member.roleId);

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            if (!role) {
                throw ErrorsConstants.ROLE_NOT_EXIST;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.MEMBERS,
                memberId,
                member,
                { isAuthGuard: true }
            )

            return {
                ...member,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string
                },
                role: {
                    id: role?.id as string,
                    name: role?.name as string,
                    roleType: role?.role as IRoleTypes
                }
            }
        })
    }

    static deleteMember = (memberId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.MEMBERS,
                memberId,
                { isAuthGuard: true }
            )
        })
    }
}