import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminDeliveryInputsStructure } from "./AdminDeliveryInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminDeliveryRepo } from "../repo/AdminDeliveryRepo";
import { IAdminDeliveryInputs } from "../interfaces/AdminDeliveryInterface";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminAddDeliveryStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminDeliveryModel>("delivery");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminDeliveryRepo.createDelivery(data),
        options: {
            onSuccess(Delivery) {
                createOperation(Delivery);
                showNotification("Delivery added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminDeliveryInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminDeliveryInputs = {
        name: "",
        mobile: "",
    };

    return {
        inputs: AdminDeliveryInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
