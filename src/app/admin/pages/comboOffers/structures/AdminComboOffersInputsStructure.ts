import { InputComponentProps } from "src/common/components/InputComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminComboOffersInputsConstants } from "../constants/AdminComboOffersInputsConstants";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";

export const AdminComboOffersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    const { state } = useEchoState<IAdminComboOffersModel>(
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

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: "!col-span-12",
            validatedInput: {
                name: AdminComboOffersInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`Code`),
            containerStyle: "!col-span-6 !col-start-1",
            validatedInput: {
                name: AdminComboOffersInputsConstants.code,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: "Branch",
            disabled: isBranchLoading || !branches?.length,
            containerStyle: "!col-span-6 !col-start-1",
            type: "dropdownSearch",
            validatedInput: {
                name: AdminComboOffersInputsConstants.branchId!,
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
                "flex justify-center !col-start-7 !row-start-2 !row-span-2",
            uploadFileInput: {
                iconClassName: "!text-5xl",
                image: isEditModal ? state.image : undefined,
            },
            className: "!w-full sm:!w-3/4 sm:!h-full sm:!max-h-36 h-28",
            labelTitle: translate(`Image`),
            labelStyle: "sm:m-auto",
            validatedInput: {
                name: AdminComboOffersInputsConstants.image!,
                rules: {
                    maxFileSize: {
                        value: 1,
                        message: translate(`Max file size is 1MB`),
                    },
                },
            },
        },
    ];
};
