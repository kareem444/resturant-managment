import AdminAddAndSearchContainer from "src/app/admin/containers/AdminAddAndSearchContainer";
import { AdminRoleFilterConstants } from "../constants/AdminRoleFilterConstants";

const AdminAddAndSearchRoleFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddRoleModal'
            filter={{
                items: AdminRoleFilterConstants,
                originalItemsKey: "roles",
            }}
            formatTitle="s"
        />
    )
};

export default AdminAddAndSearchRoleFeature;
