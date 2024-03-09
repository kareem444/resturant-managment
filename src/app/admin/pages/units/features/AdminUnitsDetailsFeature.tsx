import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetUnitStructure } from "../structures/AdminGetUnitStructure";

const AdminUnitsDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetUnitStructure()} />;
};

export default AdminUnitsDetailsFeature;
