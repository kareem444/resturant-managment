import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminExpensesInputsStructure } from "./AdminExpensesInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminExpensesRepo } from "../repo/AdminExpensesRepo";
import { IAdminExpensesInputs } from "../interfaces/AdminExpensesInterface";
import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddExpensesStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminExpensesModel>("expenses");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminExpensesRepo.createExpenses(data),
        options: {
            onSuccess(Expenses) {
                createOperation(Expenses);
                showNotification("Expenses added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminExpensesInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminExpensesInputs = {
        name: "",
        description: "",
    };

    return {
        inputs: AdminExpensesInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
