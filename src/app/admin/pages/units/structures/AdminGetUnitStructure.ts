import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminUnitsRepo } from "../repo/AdminUnitsRepo";
import { IAdminUnitModel } from "src/app/admin/models/AdminUnitModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminUnitTableHeaderConstants } from "../constants/AdminUnitTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import moment from "moment";

export const AdminGetUnitStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminUnitModel[]>({
            key: AsyncStateConstants.units,
            queryFn: AdminUnitsRepo.getUnits,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminUnitTableHeaderConstants,
            items: data || [],
            selectors: {
                Date: (item: IAdminUnitModel) => moment(item.createdAt).format('D-MMM-YYYY hh:mm:ss A'),
            },
            nameSelector: (item: IAdminUnitModel) => item.name,
            buttons: {
                onEdit: (item: IAdminUnitModel) => {
                    setState(item);
                    openEditModal("adminEditUnitModal", {
                        formatTitle: "s",
                    });
                },
                onDelete: (item: IAdminUnitModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteUnitModal",
                        "onDeleteUnitModalDelete",
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
