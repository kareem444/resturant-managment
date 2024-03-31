import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminTableInputsConstants } from "../constants/AdminTablesInputsConstants";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";

export const AdminTablesInputsStructure = (
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

    const { state } = useEchoState<IAdminTableModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NUMBER}`),
            validatedInput: {
                name: AdminTableInputsConstants.number,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.BRANCH}`),
            disabled: isBranchLoading || !branches?.length,
            type: "dropdownSearch",
            validatedInput: {
                name: AdminTableInputsConstants.branchId!,
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
                menu:{
                    isMenuFloat: true,
                    displayedItems: 2,
                },
                isLoading: isBranchLoading,
                defaultSelectedValue: isEditModal && state.branch,
            },
        },
    ];
};
