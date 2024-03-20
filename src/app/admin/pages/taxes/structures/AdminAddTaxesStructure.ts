import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminTaxesInputsStructure } from "./AdminTaxesInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminTaxesRepo } from "../repo/AdminTaxesRepo";
import { IAdminTaxInputs } from "../interfaces/AdminTaxesInterface";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddTaxStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminTaxModel>("taxes");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminTaxesRepo.createTax(data),
        options: {
            onSuccess(Tax) {
                createOperation(Tax);
                showNotification("Tax added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminTaxInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminTaxInputs = {
        name: "",
        amount: "",
        minAmount: "",
    };

    return {
        inputs: AdminTaxesInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
