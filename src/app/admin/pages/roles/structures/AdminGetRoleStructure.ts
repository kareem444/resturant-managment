import moment from "moment";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { ITableContent } from "src/common/components/TableComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminRoleTableHeaderConstants } from "../constants/AdminRoleTableConstants";
import { AdminRolesRepo } from "../repo/AdminRolesRepo";

const AdminGetRoleStructure = (): IAdminDetailsStatusContainerProps => {
    const { openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminRoleModel[]>({
        key: AsyncStateConstants.roles,
        queryFn: AdminRolesRepo.getRoles,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminRoleTableHeaderConstants,
        items: data ?? [],
        selectors: {
            0: (item: IAdminRoleModel) => item.role,
            1: (item: IAdminRoleModel) => moment(item.createdAt).format('D MMM'),
        },
        nameSelector: (item: IAdminRoleModel) => item.name,
        buttons: {
            onDelete: (item: IAdminRoleModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteRoleModal",
                    "onDeleteRoleModalDelete",
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

export default AdminGetRoleStructure;
