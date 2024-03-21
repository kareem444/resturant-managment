import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetTablesStructure from "../structures/AdminGetTablesStructure";

export default function AdminTableDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetTablesStructure()} />;
}
