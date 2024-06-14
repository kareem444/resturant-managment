import { InputComponentProps } from "src/common/components/InputComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import {
    AdminDiscountApplyToConstants,
    AdminDiscountTypesConstants,
    AdminDiscountsInputsConstants,
} from "../constants/AdminDiscountsInputsConstants";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { AdminProductsRepo } from "../../products/repo/AdminProductsRepo";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { AdminCustomersRepo } from "../../customers/repo/AdminCustomersRepo";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";

export const AdminDiscountsInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const {
        state: discounts,
        updateDiscountApplyTo,
        addDiscountProduct,
        addDiscountCustomer,
    } = useDiscountUiReducer();

    const { state } = useEchoState<IAdminDiscountModel>(
        EchoStateConstants.selectedItem
    );

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: products, isLoading: isProductsLoading } = useFetch<
        IAdminProductsModel[]
    >({
        key: AsyncStateConstants.products,
        queryFn: () => AdminProductsRepo.getProducts(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: customers, isLoading: isCustomersLoading } = useFetch<
        IAdminCustomerModel[]
    >({
        key: AsyncStateConstants.customers,
        queryFn: () => AdminCustomersRepo.getCustomers(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminDiscountsInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`Amount`),
            type: "number",
            validatedInput: {
                name: AdminDiscountsInputsConstants.amount!,
                rules: {
                    isRequired: true,
                    isNumber: true,
                },
            },
        },
        {
            labelTitle: "Discount Type",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminDiscountsInputsConstants.discountType!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: AdminDiscountTypesConstants,
                selectors: {
                    value: "id",
                    text: "name",
                },
                defaultSelectedValue: AdminDiscountTypesConstants[0]
            },
        },
        {
            labelTitle: "Branch",
            disabled: isBranchLoading || !branches?.length,
            type: "dropdownSearch",
            validatedInput: {
                name: AdminDiscountsInputsConstants.branchId!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: branches,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isBranchLoading,
                defaultSelectedValue: isEditModal && state.branch,
            },
        },
        {
            labelTitle: translate(`Available Discounts`),
            type: "number",
            validatedInput: {
                name: AdminDiscountsInputsConstants.availableDiscounts!,
            },
        },
        {
            labelTitle: "Apply To",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminDiscountsInputsConstants.applyTo!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: AdminDiscountApplyToConstants,
                onSelect: (item) => updateDiscountApplyTo(item.value),
                selectors: {
                    value: "id",
                    text: "name",
                },
                defaultSelectedValue: AdminDiscountApplyToConstants.find(
                    (item) => discounts.applyTo === item.id
                ),
            },
        },
        {
            labelTitle: "Product",
            disabled: isProductsLoading || !products?.length,
            type: discounts.applyTo?.includes("product")
                ? "dropdownSearch"
                : "hidden",
            containerStyle: discounts.applyTo?.includes("customer")
                ? ""
                : "!col-span-12",
            dropDownSearchInput: {
                data: products,
                onSelect: (_, item) => addDiscountProduct(item),
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isProductsLoading,
            },
        },
        {
            labelTitle: "Customer",
            disabled: isCustomersLoading || !customers?.length,
            type: discounts.applyTo?.includes("customer")
                ? "dropdownSearch"
                : "hidden",
            containerStyle: discounts.applyTo?.includes("product")
                ? ""
                : "!col-span-12",
            dropDownSearchInput: {
                data: customers,
                onSelect: (_, item) => addDiscountCustomer(item),
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isCustomersLoading,
            },
        },
        {
            labelTitle: translate(`Start Date`),
            type: "datetime-local",
            validatedInput: {
                name: AdminDiscountsInputsConstants.startDate!,
            },
        },
        {
            labelTitle: translate(`End Date`),
            type: "datetime-local",
            validatedInput: {
                name: AdminDiscountsInputsConstants.endDate!,
            },
        },
    ];
};
