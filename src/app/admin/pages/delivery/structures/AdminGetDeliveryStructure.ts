import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { AdminDeliveryTableHeaderConstants } from "../constants/AdminDeliveryTableConstants";
import { AdminDeliveryRepo } from "../repo/AdminDeliveryRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetDeliveryStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminDeliveryModel[]>({
        key: AsyncStateConstants.delivery,
        queryFn: AdminDeliveryRepo.getDelivery,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminDeliveryTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminDeliveryModel) => item.branch?.name,
            2: (item: IAdminDeliveryModel) => item.mobile,
        },
        nameSelector: (item: IAdminDeliveryModel) => item.name,
        avatarSelector: (item: IAdminDeliveryModel) => item.image,
        buttons: {
            onEdit: (item: IAdminDeliveryModel) => {
                setState(item);
                openEditModal("adminEditDeliveryModal", { formatTitle: "es" });
            },
            onDelete: (item: IAdminDeliveryModel) => {
                setState(item);
                openDeleteModal("adminDeleteDeliveryModal", "onDeleteDeliveryModalDelete", {
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

export default AdminGetDeliveryStructure;
