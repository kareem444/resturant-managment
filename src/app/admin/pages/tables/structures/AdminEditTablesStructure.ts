import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminTablesInputsStructure } from "./AdminTablesInputsStructure";
import { IAdminTableInputs } from "../interfaces/AdminTablesInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminTablesRepo } from "../repo/AdminTablesRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditTableStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedTable } = useEchoState<IAdminTableModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminTableModel>("tables");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminTablesRepo.updateTable(selectedTable?.id!, data),
        options: {
            onSuccess(Table: IAdminTableModel) {
                updateOperation({ ...selectedTable, ...Table });
                showNotification("Table updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminTableInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminTableInputs = {
        number: selectedTable?.number || "",
    };

    return {
        inputs: AdminTablesInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
