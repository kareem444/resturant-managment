import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminDiscountsInputsStructure } from "./AdminDiscountsInputsStructure";
import { IAdminDiscountsInputs } from "../interfaces/AdminDiscountsInterface";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useModalReducer from "src/common/redux/modal/useModalReducer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { AdminDiscountsRepo } from "../repo/AdminDiscountsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";

export const AdminEditDiscountsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { state: selectedDiscounts } = useEchoState<IAdminDiscountModel>(
        EchoStateConstants.selectedItem
    );
    const { closeModal } = useModalReducer();
    const { updateOperation } = useCrudHandler<IAdminDiscountModel>("discounts");
    const { state: discounts } = useDiscountUiReducer();
    const { state: branches } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches);

    const { mutate, isLoading } = useMutate({
        queryFn: (data) =>
            AdminDiscountsRepo.updateDiscounts(
                selectedDiscounts?.id!,
                data,
                discounts,
                branches?.data,
            ),
        options: {
            onSuccess(discount: IAdminDiscountModel) {
                updateOperation({ ...selectedDiscounts, ...discount });
                showNotification("Discount updated successfully");
                closeModal();
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminDiscountsInputs) => {
        if (!branches?.isLoading) {
            mutate(data);
        }
    }

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: "fi-rr-pencil",
        isLoading,
    };

    const defaultValues: IAdminDiscountsInputs = {
        name: selectedDiscounts?.name || "",
        amount: selectedDiscounts?.amount || "",
        availableDiscounts: selectedDiscounts?.availableDiscounts || "",
        endDate: selectedDiscounts?.endDate || "",
        startDate: selectedDiscounts?.startDate || "",
        discountType: selectedDiscounts?.discountType || "ratio",
        applyTo: selectedDiscounts?.applyTo || "order",
    };

    return {
        inputs: AdminDiscountsInputsStructure(true),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
