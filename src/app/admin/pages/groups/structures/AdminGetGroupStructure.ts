import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminGroupsRepo } from "../repo/AdminGroupsRepo";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminGroupTableHeaderConstants } from "../constants/AdminGroupTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import moment from "moment";

export const AdminGetGroupStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminGroupModel[]>({
            key: AsyncStateConstants.groups,
            queryFn: AdminGroupsRepo.getGroups,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminGroupTableHeaderConstants,
            items: data || [],
            selectors: {
                Date: (item: IAdminGroupModel) => moment(item.createdAt).format('D MMM'),
            },
            nameSelector: (item: IAdminGroupModel) => item.name,
            buttons: {
                onEdit: (item: IAdminGroupModel) => {
                    setState(item);
                    openEditModal("adminEditGroupModal", {
                        formatTitle: "s",
                    });
                },
                onDelete: (item: IAdminGroupModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteGroupModal",
                        "onDeleteGroupModalDelete",
                        {
                            formatTitle: "s",
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
