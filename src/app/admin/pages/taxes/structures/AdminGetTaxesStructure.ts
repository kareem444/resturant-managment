import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { AdminTaxTableHeaderConstants } from "../constants/AdminTaxesTableConstants";
import { AdminTaxesRepo } from "../repo/AdminTaxesRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetTaxesStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminTaxModel[]>({
        key: AsyncStateConstants.taxes,
        queryFn: AdminTaxesRepo.getTaxes,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminTaxTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminTaxModel) => item.branch?.name,
            2: (item: IAdminTaxModel) => item.amount,
            3: (item: IAdminTaxModel) => item.minAmount,
        },
        nameSelector: (item: IAdminTaxModel) => item.name,
        buttons: {
            onEdit: (item: IAdminTaxModel) => {
                setState(item);
                openEditModal("adminEditTaxModal", { formatTitle: "es" });
            },
            onDelete: (item: IAdminTaxModel) => {
                setState(item);
                openDeleteModal("adminDeleteTaxModal", "onDeleteTaxModalDelete", {
                    formatTitle: "es",
                });
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

export default AdminGetTaxesStructure;
