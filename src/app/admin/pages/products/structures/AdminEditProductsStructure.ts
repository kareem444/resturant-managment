import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminProductsInputsStructure } from "./AdminProductsInputsStructure";
import { IAdminProductsInputs } from "../interfaces/AdminProductsInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminProductsRepo } from "../repo/AdminProductsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditProductsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedProducts } = useEchoState<IAdminProductsModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminProductsModel>("products");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminProductsRepo.updateProducts(selectedProducts?.id!, data),
        options: {
            onSuccess(Products: IAdminProductsModel) {
                updateOperation({ ...selectedProducts, ...Products });
                showNotification("Products updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminProductsInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminProductsInputs = {
        name: selectedProducts?.name || "",
        mobile: selectedProducts?.mobile || "",
    };

    return {
        inputs: AdminProductsInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
