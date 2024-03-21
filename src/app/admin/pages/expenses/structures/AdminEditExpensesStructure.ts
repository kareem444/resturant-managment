import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminExpensesInputsStructure } from "./AdminExpensesInputsStructure";
import { IAdminExpensesInputs } from "../interfaces/AdminExpensesInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminExpensesRepo } from "../repo/AdminExpensesRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditExpensesStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedExpenses } = useEchoState<IAdminExpensesModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminExpensesModel>("expenses");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminExpensesRepo.updateExpenses(selectedExpenses?.id!, data),
        options: {
            onSuccess(Expenses: IAdminExpensesModel) {
                updateOperation({ ...selectedExpenses, ...Expenses });
                showNotification("Branch updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminExpensesInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminExpensesInputs = {
        name: selectedExpenses?.name || "",
        description: selectedExpenses?.description || "",
    };

    return {
        inputs: AdminExpensesInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
