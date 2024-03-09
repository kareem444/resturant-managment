import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetGroupStructure } from "../structures/AdminGetGroupStructure";

const AdminGroupsDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetGroupStructure()} />;
};

export default AdminGroupsDetailsFeature;
