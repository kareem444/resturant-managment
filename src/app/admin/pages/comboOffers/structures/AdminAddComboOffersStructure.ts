import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminComboOffersInputsStructure } from "./AdminComboOffersInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminComboOffersRepo } from "../repo/AdminComboOffersRepo";
import { IAdminComboOffersInputs } from "../interfaces/AdminComboOffersInterface";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";

export const AdminAddComboOffersStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } =
        useCrudHandler<IAdminComboOffersModel>("comboOffers");
    const { state: branches } = useAsyncState<IAdminBranchModel[]>(
        AsyncStateConstants.branches
    );
    const { state: ComboOffers } = useComboOfferUiReducer();

    const { mutate, isLoading } = useMutate({
        queryFn: (data) =>
            AdminComboOffersRepo.createComboOffers(
                data,
                ComboOffers.data,
                branches?.data
            ),
        options: {
            onSuccess(ComboOffers) {
                createOperation(ComboOffers);
                showNotification("ComboOffers added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminComboOffersInputs) => mutate(data);

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminComboOffersInputs = {
        name: "",
        code: "",
    };

    return {
        inputs: AdminComboOffersInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
