import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel";
import { AdminExpensesTableHeaderConstants } from "../constants/AdminExpensesTableConstants";
import { AdminExpensesRepo } from "../repo/AdminExpensesRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetExpensesStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminExpensesModel[]>({
        key: AsyncStateConstants.expenses,
        queryFn: AdminExpensesRepo.getExpenses,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminExpensesTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminExpensesModel) => item.branch?.name,
            2: (item: IAdminExpensesModel) => item.expensesDestination?.name,
            3: (item: IAdminExpensesModel) => item.paymentMethod?.name,
            4: (item: IAdminExpensesModel) => item.description,
        },
        nameSelector: (item: IAdminExpensesModel) => item.name,
        buttons: {
            onEdit: (item: IAdminExpensesModel) => {
                setState(item);
                openEditModal("adminEditExpensesModal");
            },
            onDelete: (item: IAdminExpensesModel) => {
                setState(item);
                openDeleteModal("adminDeleteExpensesModal", "onDeleteExpensesModalDelete");
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

export default AdminGetExpensesStructure;
