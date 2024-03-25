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
import useProductUiReducer from "../redux/ui/useProductUiReducer";
import { IDropDownSearchItemProperties } from "src/common/components/DropDownSearchComponent";

export const AdminProductsInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const {
        state: products,
        changeProductType,
        removeAllProductSize,
        addProductTax,
        addProductAddition
    } = useProductUiReducer()

    const handelOnProductTypeSelect = (value: IDropDownSearchItemProperties) => {
        if (value.value === 1) {
            changeProductType({ productType: 'fixed' })
            removeAllProductSize()
            return
        }
        changeProductType({ productType: 'multi' })
    }

    const handelOnAddTax = (value: IDropDownSearchItemProperties) => {
        addProductTax({ id: value.value, name: value.text })
    }

    const handelOnAddAddition = (value: IDropDownSearchItemProperties) => {
        addProductAddition({ id: value.value, name: value.text })
    }

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { state } = useEchoState<IAdminProductsModel>(
        EchoStateConstants.selectedItem
    );

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
                name: AdminProductsInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: "Group",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: 'sm:!col-span-4',
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
            labelTitle: "Branch",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: 'sm:!col-span-4',
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
            type: 'file',
            containerStyle: 'flex justify-center sm:row-span-2 sm:!col-span-4 sm:!col-start-9 sm:!row-start-2',
            uploadFileInput: {
                iconClassName: '!text-5xl',
                image: isEditModal ? state.image : undefined,
            },
            className: '!w-full sm:!w-3/4 sm:!h-full sm:!max-h-36 h-28',
            labelTitle: translate(`Image`),
            labelStyle: 'sm:m-auto',
            validatedInput: {
                name: AdminProductsInputsConstants.image!,
                rules: {
                    maxFileSize: {
                        value: 1,
                        message: translate(`Max file size is 1MB`),
                    },
                },
            }
        },
        {
            labelTitle: "Taxes",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: 'sm:!col-span-4',
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
            labelTitle: "Additions",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: 'sm:!col-span-4',
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
            labelTitle: translate(`Price`),
            validatedInput: {
                name: AdminProductsInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: 'Product Type',
            type: 'dropdownSearch',
            validatedInput: {
                name: AdminProductsInputsConstants.branchId!,
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                onSelect: handelOnProductTypeSelect,
                data: [
                    { id: 1, name: 'Fixed Size' },
                    { id: 2, name: 'Multi Size' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 1, name: 'Fixed Size' }
            }
        },
    ];
};
