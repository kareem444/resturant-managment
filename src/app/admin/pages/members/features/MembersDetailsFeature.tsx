import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { AdminMembersRepo } from "../repo/AdminMembersRepo";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { IAdminMemberModel } from "src/app/admin/models/AdminMemberModel";

export default function MembersDetailsFeature() {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);

    const { data, isLoading, isError } = useFetch<IAdminMemberModel[]>({
        key: AsyncStateConstants.members,
        queryFn: () => AdminMembersRepo.getMembers(),
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
        },
    });

    const tableContent: ITableContent = {
        header: ["Name", "Mobile", "Email", "Password", "Branch", "Role"],
        items: data ?? [],
        maxStringLength: 15,
        selectors: {
            Mobile: (item: IAdminMemberModel) => item.mobile || "-",
            Email: (item: IAdminMemberModel) => item.email || "-",
            Password: (item: IAdminMemberModel) => item.password,
            Branch: (item: IAdminMemberModel) => item.branch.name,
            Role: (item: IAdminMemberModel) => item.role.name,
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

    return (
        <AdminDetailsStatusContainer
            tableContent={tableContent}
            isLoading={isLoading && !data}
            isError={isError}
            isData={!!data && data.length > 0}
        />
    );
}
