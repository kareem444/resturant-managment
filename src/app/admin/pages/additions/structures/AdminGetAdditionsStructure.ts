import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import { AdminAdditionsTableHeaderConstants } from "../constants/AdminAdditionsTableConstants";
import { AdminAdditionsRepo } from "../repo/AdminAdditionsRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetAdditionsStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminAdditionsModel[]>({
        key: AsyncStateConstants.additions,
        queryFn: AdminAdditionsRepo.getAdditions,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminAdditionsTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminAdditionsModel) => item.price,
        },
        nameSelector: (item: IAdminAdditionsModel) => item.name,
        avatarSelector: (item: IAdminAdditionsModel) => item.image,
        buttons: {
            onEdit: (item: IAdminAdditionsModel) => {
                setState(item);
                openEditModal("adminEditAdditionModal", { size: 'xl' });
            },
            onDelete: (item: IAdminAdditionsModel) => {
                setState(item);
                openDeleteModal("adminDeleteAdditionModal", "onDeleteAdditionsModalDelete");
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

export default AdminGetAdditionsStructure;
