import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminExpensesDestinationsRepo } from "../repo/AdminExpensesDestinationsRepo";
import { IAdminExpensesDestinationModel } from "src/app/admin/models/AdminExpensesDestinationModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminExpensesDestinationTableHeaderConstants } from "../constants/AdminExpensesDestinationTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import moment from "moment";

export const AdminGetExpensesDestinationStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminExpensesDestinationModel[]>({
            key: AsyncStateConstants.expensesDestinations,
            queryFn: AdminExpensesDestinationsRepo.getExpensesDestinations,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminExpensesDestinationTableHeaderConstants,
            items: data || [],
            selectors: {
                Date: (item: IAdminExpensesDestinationModel) => moment(item.createdAt).format('D MMM'),
            },
            nameSelector: (item: IAdminExpensesDestinationModel) => item.name,
            buttons: {
                onEdit: (item: IAdminExpensesDestinationModel) => {
                    setState(item);
                    openEditModal("adminEditExpensesDestinationModal", {
                        formatTitle: "s",
                    });
                },
                onDelete: (item: IAdminExpensesDestinationModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteExpensesDestinationModal",
                        "onDeleteExpensesDestinationModalDelete",
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
