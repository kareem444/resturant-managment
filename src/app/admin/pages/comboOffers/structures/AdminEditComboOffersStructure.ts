import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminComboOffersInputsStructure } from "./AdminComboOffersInputsStructure";
import { IAdminComboOffersInputs } from "../interfaces/AdminComboOffersInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminComboOffersRepo } from "../repo/AdminComboOffersRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";

export const AdminEditComboOffersStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedComboOffers } = useEchoState<IAdminComboOffersModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminComboOffersModel>("comboOffers");
    const { state: branches } = useAsyncState<IAdminBranchModel[]>(
        AsyncStateConstants.branches
    );
    const { state: ComboOffers, resetComboOfferProducts } = useComboOfferUiReducer();

    const { mutate, isLoading } = useMutate({
        queryFn: (data) =>
            AdminComboOffersRepo.updateComboOffers(
                selectedComboOffers?.id!,
                data,
                ComboOffers.data,
                branches?.data
            ),
        options: {
            onSuccess(ComboOffers: IAdminComboOffersModel) {
                updateOperation({ ...selectedComboOffers, ...ComboOffers });
                showNotification("ComboOffers updated successfully");
                resetComboOfferProducts();
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminComboOffersInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminComboOffersInputs = {
        name: selectedComboOffers?.name || "",
        code: selectedComboOffers?.code || "",
    };

    return {
        inputs: AdminComboOffersInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
