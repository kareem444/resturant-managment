import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { InputComponentProps } from "src/common/components/InputComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminAdditionsInputsConstants } from "../constants/AdminAdditionsInputsConstants";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";

export const AdminAdditionsInputsStructure = (
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

    const { state } = useEchoState<IAdminAdditionsModel>(
        EchoStateConstants.selectedItem
    );

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            containerStyle: 'sm:!col-span-8',
            validatedInput: {
                name: AdminAdditionsInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`${TRANSLATE.PRICE}`),
            containerStyle: 'sm:!col-span-8',
            validatedInput: {
                name: AdminAdditionsInputsConstants.price,
                rules: {
                    isNumber: true
                }
            },
        },
        {
            type: 'file',
            containerStyle: 'flex justify-center sm:row-span-2 sm:!col-span-4 sm:!col-start-9 sm:!row-start-1',
            uploadFileInput: {
                iconClassName: '!text-5xl',
                image: isEditModal ? state.image : undefined,
            },
            className: '!w-full sm:!w-3/4 sm:!h-full sm:!max-h-36 h-28',
            labelTitle: translate(`${TRANSLATE.IMAGE}`),
            labelStyle: 'sm:m-auto',
            validatedInput: {
                name: AdminAdditionsInputsConstants.image!,
                rules: {
                    maxFileSize: {
                        value: 1,
                        message: translate(`Max file size is 1MB`),
                    },
                },
            }
        },
    ];
};
