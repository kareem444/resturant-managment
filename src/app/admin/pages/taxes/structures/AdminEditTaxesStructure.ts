import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminTaxesInputsStructure } from "./AdminTaxesInputsStructure";
import { IAdminTaxInputs } from "../interfaces/AdminTaxesInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminTaxesRepo } from "../repo/AdminTaxesRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditTaxStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedTax } = useEchoState<IAdminTaxModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminTaxModel>("taxes");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminTaxesRepo.updateTax(selectedTax?.id!, data),
        options: {
            onSuccess(Tax: IAdminTaxModel) {
                updateOperation({ ...selectedTax, ...Tax });
                showNotification("Tax updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminTaxInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminTaxInputs = {
        name: selectedTax?.name || "",
        amount: selectedTax?.amount || "",
        minAmount: selectedTax?.minAmount || "",
    };

    return {
        inputs: AdminTaxesInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
