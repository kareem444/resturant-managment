import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminAdditionsInputsStructure } from "./AdminAdditionsInputsStructure";
import { IAdminAdditionsInputs } from "../interfaces/AdminAdditionInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminAdditionsRepo } from "../repo/AdminAdditionsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

export const AdminEditAdditionsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedAdditions } = useEchoState<IAdminAdditionsModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminAdditionsModel>("additions");

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminAdditionsRepo.updateAdditions(selectedAdditions?.id!, data),
        options: {
            onSuccess(Additions: IAdminAdditionsModel) {
                updateOperation({ ...selectedAdditions, ...Additions });
                showNotification("Additions updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminAdditionsInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminAdditionsInputs = {
        name: selectedAdditions?.name || "",
        price: selectedAdditions?.price || "",
    };

    return {
        inputs: AdminAdditionsInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
