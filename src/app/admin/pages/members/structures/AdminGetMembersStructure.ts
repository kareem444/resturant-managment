import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel";
import { AdminMemberTableHeaderConstants } from "../constants/AdminMemberTableConstants";
import { AdminMembersRepo } from "../repo/AdminMembersRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";

const AdminGetMembersStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError, query } = useFetch<IAdminMemberModel[]>({
        key: AsyncStateConstants.members,
        queryFn: AdminMembersRepo.getMembers,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminMemberTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminMemberModel) => item.mobile,
            2: (item: IAdminMemberModel) => item.email,
            3: (item: IAdminMemberModel) => item.password,
            4: (item: IAdminMemberModel) => item.branch?.name,
            5: (item: IAdminMemberModel) => item.role?.name,
        },
        nameSelector: (item: IAdminMemberModel) => item.name,
        buttons: {
            onEdit: (item: IAdminMemberModel) => {
                setState(item);
                openEditModal("adminEditMemberModal");
            },
            onDelete: (item: IAdminMemberModel) => {
                setState(item);
                openDeleteModal("adminDeleteMemberModal", "onDeleteMemberModalDelete");
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

export default AdminGetMembersStructure;
