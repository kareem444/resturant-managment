import {
    IDefaultValuesProperties,
    IFormComponentProperties,
} from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminRoleInputsStructure } from "./AdminRoleInputsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import {
    adminRoleDefaultVal,
    posRolesDefaultVal,
} from "../constants/AdminRoleDefaultVal";
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";
import { AdminRolesRepo } from "../repo/AdminRolesRepo";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { iRoleTypes } from "../interfaces/AdminRoleInterface";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddRoleStructure = (
    setIsAdminRole: React.Dispatch<React.SetStateAction<iRoleTypes>>
): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminRoleModel>("roles");

    const { state: roles } = useEchoState<any>(EchoStateConstants.selectedRoles);
    const { state: roleType } = useEchoState<iRoleTypes>(
        EchoStateConstants.selectedRoleType,
        "dashboardAndPos"
    );

    const { mutate, isLoading } = useMutate({
        queryFn: (param) => AdminRolesRepo.addRole(param),
        options: {
            onSuccess(id, param) {
                createOperation({ ...param, id });
                showNotification("Role added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = async (data: IDefaultValuesProperties) => {
        const handelRoles = () => {
            if (roleType === "dashboardAndPos") {
                return {
                    ...adminRoleDefaultVal,
                    ...roles,
                    reports: { ...adminRoleDefaultVal.reports, ...roles.reports },
                    pos: { ...adminRoleDefaultVal.pos, ...roles.pos },
                };
            } else if (roleType === "dashboard") {
                return {
                    ...adminRoleDefaultVal,
                    ...roles,
                    reports: { ...adminRoleDefaultVal.reports, ...roles.reports },
                    pos: { ...posRolesDefaultVal, accessPos: false },
                };
            } else {
                return { pos: { ...posRolesDefaultVal, ...roles } };
            }
        };
        let handelData: IAdminRoleModel = {
            name: (data.name as string).trim(),
            role: roleType,
            permissions: handelRoles(),
        };
        mutate(handelData);
    };

    const button = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    return {
        inputs: AdminRoleInputsStructure(setIsAdminRole),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: {
            name: "",
            role: "dashboard",
        },
    };
};
