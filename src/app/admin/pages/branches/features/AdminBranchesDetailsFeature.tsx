import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetBranchStructure } from "../structures/AdminGetBranchStructure";

const AdminBranchesDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetBranchStructure()} />;
};

export default AdminBranchesDetailsFeature;
