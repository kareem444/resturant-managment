import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminDeliveryInputsStructure } from "./AdminDeliveryInputsStructure";
import { IAdminDeliveryInputs } from "../interfaces/AdminDeliveryInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminDeliveryRepo } from "../repo/AdminDeliveryRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditDeliveryStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedDelivery } = useEchoState<IAdminDeliveryModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminDeliveryModel>("delivery");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminDeliveryRepo.updateDelivery(selectedDelivery?.id!, data),
        options: {
            onSuccess(delivery: IAdminDeliveryModel) {
                updateOperation({ ...selectedDelivery, ...delivery });
                showNotification("Delivery updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminDeliveryInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminDeliveryInputs = {
        name: selectedDelivery?.name || "",
        mobile: selectedDelivery?.mobile || "",
    };

    return {
        inputs: AdminDeliveryInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
