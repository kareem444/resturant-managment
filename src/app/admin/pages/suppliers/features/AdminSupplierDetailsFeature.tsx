import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetSupplierStructure } from "../structures/AdminGetSupplierStructure";

const AdminSuppliersDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetSupplierStructure()} />;
};

export default AdminSuppliersDetailsFeature;
