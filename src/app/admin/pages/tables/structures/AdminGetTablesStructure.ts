import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import { AdminTableTableHeaderConstants } from "../constants/AdminTablesTableConstants";
import { AdminTablesRepo } from "../repo/AdminTablesRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetTablesStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminTableModel[]>({
        key: AsyncStateConstants.tables,
        queryFn: AdminTablesRepo.getTables,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminTableTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminTableModel) => item.branch?.name,
        },
        nameSelector: (item: IAdminTableModel) => item.number,
        buttons: {
            onEdit: (item: IAdminTableModel) => {
                setState(item);
                openEditModal("adminEditTableModal");
            },
            onDelete: (item: IAdminTableModel) => {
                setState(item);
                openDeleteModal("adminDeleteTableModal", "onDeleteTableModalDelete");
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

export default AdminGetTablesStructure;
