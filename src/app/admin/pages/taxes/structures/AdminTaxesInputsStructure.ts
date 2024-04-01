import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminTaxInputsConstants } from "../constants/AdminTaxesInputsConstants";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";

export const AdminTaxesInputsStructure = (
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

    const { state } = useEchoState<IAdminTaxModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminTaxInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.BRANCH}`),
            labelStyle: "",
            disabled: isBranchLoading || !branches?.length,
            type: "dropdownSearch",
            validatedInput: {
                name: AdminTaxInputsConstants.branchId!,
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
            labelTitle: translate(`${TRANSLATE.AMOUNT} (%)`),
            containerStyle: "",
            type: "number",
            validatedInput: {
                name: AdminTaxInputsConstants.amount!,
                rules: {
                    isNumber: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.MIN_AMOUNT}`),
            containerStyle: "",
            type: "number",
            validatedInput: {
                name: AdminTaxInputsConstants.minAmount!,
                rules: {
                    isNumber: true,
                },
            },
        },
    ];
};
