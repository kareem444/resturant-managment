import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminTablesInputsStructure } from "./AdminTablesInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminTablesRepo } from "../repo/AdminTablesRepo";
import { IAdminTableInputs } from "../interfaces/AdminTablesInterface";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddTableStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminTableModel>("tables");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminTablesRepo.createTable(data),
        options: {
            onSuccess(Table) {
                createOperation(Table);
                showNotification("Table added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminTableInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminTableInputs = {
        number: "",
    };

    return {
        inputs: AdminTablesInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
