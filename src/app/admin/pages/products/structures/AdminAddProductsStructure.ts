import { IFormComponentProperties } from "src/common/components/FormComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminProductsInputsStructure } from "./AdminProductsInputsStructure";
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminProductsRepo } from "../repo/AdminProductsRepo";
import { IAdminProductsInputs } from "../interfaces/AdminProductsInterface";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import useCrudHandler from "src/common/hooks/useCrudHandler";
import useProductUiReducer from "../redux/useProductUiReducer";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import useAsyncState from "src/common/DataHandler/hooks/server/useAsyncState";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";

export const AdminAddProductsStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate();
    const { createOperation } = useCrudHandler<IAdminProductsModel>("products");
    const { state: products } = useProductUiReducer()
    const { state: branches } = useAsyncState<IAdminBranchModel[]>(AsyncStateConstants.branches);
    const { state: groups } = useAsyncState<IAdminGroupModel[]>(AsyncStateConstants.groups);

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AdminProductsRepo.createProducts(data, products, branches?.data, groups?.data),
        options: {
            onSuccess(Products) {
                createOperation(Products);
                showNotification("Products added successfully");
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    const handelOnSubmit = (data: IAdminProductsInputs) => {
        if (!branches?.isLoading && !groups?.isLoading) {
            mutate(data);
        }
    }

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.ADD),
        icon: "fi-rr-plus",
        isLoading,
    };

    const defaultValues: IAdminProductsInputs = {
        name: "",
        code: "",
        productType: "fixed",
        price: "",
    };

    return {
        inputs: AdminProductsInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any,
    };
};
