import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetCustomerStructure } from "../structures/AdminGetCustomerStructure";

const AdminCustomersDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetCustomerStructure()} />;
};

export default AdminCustomersDetailsFeature;
