import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";
import { AdminRolesRepo } from "../../roles/repo/AdminRolesRepo";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminMemberInputsConstants } from "../constants/AdminMemberInputsConstants";
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel";

export const AdminMembersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: roles, isLoading: isRolesLoading } = useFetch<
        IAdminRoleModel[]
    >({
        key: AsyncStateConstants.roles,
        queryFn: () => AdminRolesRepo.getRoles(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { state } = useEchoState<IAdminMemberModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminMemberInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.EMAIL}`),
            type: "email",
            validatedInput: {
                name: AdminMemberInputsConstants.email!,
                rules: {
                    isEmail: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.MOBILE}`),
            type: "number",
            validatedInput: {
                name: AdminMemberInputsConstants.mobile!,
                rules: {
                    isNumber: true,
                },
            },
        },
        {
            type: "number",
            labelTitle: translate(`${TRANSLATE.PASSWORD}`),
            validatedInput: {
                name: AdminMemberInputsConstants.password!,
                rules: {
                    isRequired: true,
                    isNumber: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.BRANCH}`),
            labelStyle: "",
            disabled: isBranchLoading || !branches?.length,
            type: "dropdownSearch",
            validatedInput: {
                name: AdminMemberInputsConstants.branchId!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: branches,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isBranchLoading,
                defaultSelectedValue: isEditModal && state.branch,
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.ROLE}`),
            labelStyle: "",
            type: "dropdownSearch",
            disabled: isRolesLoading || !roles?.length,
            validatedInput: {
                name: AdminMemberInputsConstants.roleId!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: roles,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isRolesLoading,
                defaultSelectedValue: isEditModal && state.role,
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.RESIDENTIAL_NUMBER}`),
            validatedInput: {
                name: AdminMemberInputsConstants.residentialNumber!,
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.HEALTH_CERTIFICATE}`),
            validatedInput: {
                name: AdminMemberInputsConstants.healthCertificate!,
            },
        },
    ];
};
