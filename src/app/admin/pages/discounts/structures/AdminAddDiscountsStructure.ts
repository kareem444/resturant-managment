import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminDiscountsInputsStructure } from "./AdminDiscountsInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminDiscountsRepo } from "../repo/AdminDiscountsRepo";
import { IAdminDiscountsInputs } from "../interfaces/AdminDiscountsInterface";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";

export const AdminAddDiscountsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminDiscountModel>("discounts");
    const { state: discounts } = useDiscountUiReducer()
    const { state: branches } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches);

    const { mutate, isLoading } = useMutate({
        queryFn: (data) =>
            AdminDiscountsRepo.createDiscounts(
                data,
                discounts,
                branches?.data,
            ),
        options: {
            onSuccess(discount) {
                createOperation(discount);
                showNotification("Discounts added successfully");
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
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminDiscountsInputs = {
        name: "",
        amount: "",
        availableDiscounts: "",
        endDate: "",
        startDate: "",
        discountType: "ratio",
        applyTo: "order",
    };

    return {
        inputs: AdminDiscountsInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
