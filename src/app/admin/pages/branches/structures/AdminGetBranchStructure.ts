import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminBranchesRepo } from "../repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminBranchTableHeaderConstants } from "../constants/AdminBranchTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";

export const AdminGetBranchStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminBranchModel[]>({
            key: AsyncStateConstants.branches,
            queryFn: AdminBranchesRepo.getBranches,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminBranchTableHeaderConstants,
            items: data || [],
            selectors: {
                Code: (item: IAdminBranchModel) => item.branchCode,
                Address: (item: IAdminBranchModel) => item.address,
                StartTime: (item: IAdminBranchModel) => item.startTime,
                EndTime: (item: IAdminBranchModel) => item.endTime,
            },
            nameSelector: (item: IAdminBranchModel) => item.name,
            buttons: {
                onEdit: (item: IAdminBranchModel) => {
                    setState(item);
                    openEditModal("adminEditBranchModal", {
                        formatTitle: "es",
                    });
                },
                onDelete: (item: IAdminBranchModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteBranchModal",
                        "onDeleteBranchModalDelete",
                        {
                            formatTitle: "es",
                        }
                    );
                },
            },
        };

        return {
            isData: !!data && data.length > 0,
            isLoading,
            isError,
            tableContent,
            onRefresh: query,
        };
    };
