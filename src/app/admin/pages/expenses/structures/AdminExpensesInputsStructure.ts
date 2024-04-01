import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminExpensesInputsConstants } from "../constants/AdminExpensesInputsConstants";
import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel";
import { AdminExpensesDestinationsRepo } from "../../expensesDestination/repo/AdminExpensesDestinationsRepo";
import { AdminPaymentsMethodsRepo } from "../../paymentsMethods/repo/AdminPaymentsMethodsRepo";

export const AdminExpensesInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: expensesDestinations, isLoading: isExpensesDestinationsLoading } = useFetch<
        IAdminRoleModel[]
    >({
        key: AsyncStateConstants.expensesDestinations,
        queryFn: () => AdminExpensesDestinationsRepo.getExpensesDestinations(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { data: paymentsMethods, isLoading: isPaymentsMethodsLoading } = useFetch<
        IAdminRoleModel[]
    >({
        key: AsyncStateConstants.paymentMethods,
        queryFn: () => AdminPaymentsMethodsRepo.getActivePaymentsMethods(),
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    const { state } = useEchoState<IAdminExpensesModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: 'col-span-12 md:col-span-6',
            validatedInput: {
                name: AdminExpensesInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.BRANCH}`),
            disabled: isBranchLoading || !branches?.length,
            containerStyle: 'col-span-12 md:col-span-6',
            type: "dropdownSearch",
            validatedInput: {
                name: AdminExpensesInputsConstants.branchId!,
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
            labelTitle: translate(`${TRANSLATE.EXPENSES_DESTINATION}`),
            containerStyle: 'col-span-12 md:col-span-6',
            type: "dropdownSearch",
            disabled: isExpensesDestinationsLoading || !expensesDestinations?.length,
            validatedInput: {
                name: AdminExpensesInputsConstants.expensesDestinationId!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: expensesDestinations,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isExpensesDestinationsLoading,
                defaultSelectedValue: isEditModal && state.expensesDestination,
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.PAYMENT_METHOD}`),
            containerStyle: 'col-span-12 md:col-span-6',
            type: "dropdownSearch",
            disabled: isPaymentsMethodsLoading || !paymentsMethods?.length,
            validatedInput: {
                name: AdminExpensesInputsConstants.paymentMethodId!,
            },
            dropDownSearchInput: {
                data: paymentsMethods,
                selectors: {
                    value: "id",
                    text: "name",
                },
                isLoading: isPaymentsMethodsLoading,
                defaultSelectedValue: isEditModal && state.paymentMethod,
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.DESCRIPTION}`),
            containerStyle: '!col-span-12',
            validatedInput: {
                name: AdminExpensesInputsConstants.description!,
                rules: {}
            }
        },
    ];
};
