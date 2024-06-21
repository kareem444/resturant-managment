import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminProductsInputsConstants } from "../constants/AdminProductsInputsConstants";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import useProductUiReducer from "../redux/useProductUiReducer";
import { IDropDownSearchItemProperties } from "src/common/components/DropDownSearchComponent";
import { AdminGroupsRepo } from "../../groups/repo/AdminGroupsRepo";
import { AdminTaxesRepo } from "../../taxes/repo/AdminTaxesRepo";
import { AdminAdditionsRepo } from "../../additions/repo/AdminAdditionsRepo";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";

export const AdminProductsInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const sizeTypes = [
        { id: "fixed", name: translate("Fixed Size") },
        { id: "multi", name: translate("Multi Size") },
    ];

    const {
        state: products,
        changeProductType,
        removeAllProductSize,
        addProductTax,
        addProductAddition,
    } = useProductUiReducer();

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: groups, isLoading: isGroupLoading } = useFetch<
        IAdminGroupModel[]
    >({
        key: AsyncStateConstants.groups,
        queryFn: () => AdminGroupsRepo.getGroups(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: taxes, isLoading: isTaxesLoading } = useFetch<IAdminTaxModel[]>(
        {
            key: AsyncStateConstants.taxes,
            queryFn: () => AdminTaxesRepo.getTaxes(),
            options: {
                isExecuteOnInitIfNoData: true,
            },
        }
    );

    const { data: additions, isLoading: isAdditionsLoading } = useFetch<
        IAdminAdditionsModel[]
    >({
        key: AsyncStateConstants.additions,
        queryFn: () => AdminAdditionsRepo.getAdditions(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { state } = useEchoState<IAdminProductsModel>(
        EchoStateConstants.selectedItem
    );

    const handelOnProductTypeSelect = (value: IDropDownSearchItemProperties) => {
        changeProductType({ productType: value.value });
        if (value.value === sizeTypes[0].id) {
            removeAllProductSize();
        }
    };

    const handelOnAddTax = (value: IDropDownSearchItemProperties) => {
        addProductTax({ id: value.value, name: value.text });
    };

    const handelOnAddAddition = (value: IDropDownSearchItemProperties) => {
        const addition = additions?.find((item) => item.id === value.value);
        if (addition) {
            addProductAddition(addition);
        }
    };

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminProductsInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`Code`),
            validatedInput: {
                name: AdminProductsInputsConstants.code,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: "Group",
            disabled: isGroupLoading || !groups?.length,
            containerStyle: "sm:!col-span-4",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminProductsInputsConstants.groupId!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: groups,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isGroupLoading,
                defaultSelectedValue: isEditModal && state.group,
            },
        },
        {
            labelTitle: "Branch",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: "sm:!col-span-4",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminProductsInputsConstants.branchId!,
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
            type: "file",
            containerStyle:
                "flex justify-center sm:row-span-2 sm:!col-span-4 sm:!col-start-9 sm:!row-start-2",
            uploadFileInput: {
                iconClassName: "!text-5xl",
                image: isEditModal ? state.image : undefined,
            },
            className: "!w-full sm:!w-3/4 sm:!h-full sm:!max-h-36 h-28",
            labelTitle: translate(`Image`),
            labelStyle: "sm:m-auto",
            validatedInput: {
                name: AdminProductsInputsConstants.image!,
                rules: {
                    maxFileSize: {
                        value: 1,
                        message: translate(`Max file size is 1MB`),
                    },
                },
            },
        },
        {
            labelTitle: "Taxes",
            disabled: isTaxesLoading || !taxes?.length,
            containerStyle: "sm:!col-span-4",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminProductsInputsConstants.taxesIds!,
            },
            dropDownSearchInput: {
                data: taxes,
                selectors: {
                    value: "id",
                    text: "name",
                },
                onSelect: handelOnAddTax,
                isLoading: isTaxesLoading,
                // defaultSelectedValue: isEditModal && state.branch,
            },
        },
        {
            labelTitle: "Additions",
            disabled: isAdditionsLoading || !additions?.length,
            containerStyle: "sm:!col-span-4",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminProductsInputsConstants.additionsIds!,
            },
            dropDownSearchInput: {
                data: additions,
                selectors: {
                    value: "id",
                    text: "name",
                },
                onSelect: handelOnAddAddition,
                isLoading: isAdditionsLoading,
                // defaultSelectedValue: isEditModal && state.branch,
            },
        },
        {
            labelTitle: translate(`Price`),
            type: products.productType == "fixed" ? "number" : "hidden",
            validatedInput: {
                name: AdminProductsInputsConstants.price!,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: "Product Type",
            type: "dropdownSearch",
            containerStyle: products.productType == "fixed" ? "" : "sm:!col-span-12",
            validatedInput: {
                name: AdminProductsInputsConstants.productType!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                onSelect: handelOnProductTypeSelect,
                data: sizeTypes,
                selectors: {
                    value: "id",
                    text: "name",
                },
                defaultSelectedValue: isEditModal
                    ? sizeTypes.find((item) => item.id === state.productType)
                    : sizeTypes[0],
            },
        },
    ];
};
