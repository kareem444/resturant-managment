import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminAdditionsInputsStructure } from "./AdminAdditionsInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminAdditionsRepo } from "../repo/AdminAdditionsRepo";
import { IAdminAdditionsInputs } from "../interfaces/AdminAdditionInterface";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddAdditionsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminAdditionsModel>("additions");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminAdditionsRepo.createAdditions(data),
        options: {
            onSuccess(Additions) {
                createOperation(Additions);
                showNotification("Additions added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminAdditionsInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminAdditionsInputs = {
        name: "",
        price: "",
    };

    return {
        inputs: AdminAdditionsInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
