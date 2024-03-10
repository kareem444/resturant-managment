import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminMembersInputsStructure } from "./AdminMembersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminMembersRepo } from "../repo/AdminMembersRepo";
import { IAdminMemberInputs } from "../interfaces/AdminMembersInterface";
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddMemberStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminMemberModel>("members");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminMembersRepo.createMember(data),
        options: {
            onSuccess(member) {
                createOperation(member);
                showNotification("Member added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminMemberInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminMemberInputs = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        residentialNumber: "",
        healthCertificate: "",
    };

    return {
        inputs: AdminMembersInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
