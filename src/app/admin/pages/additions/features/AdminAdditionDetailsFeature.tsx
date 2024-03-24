import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetAdditionsStructure from "../structures/AdminGetAdditionsStructure";

export default function AdminAdditionsDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetAdditionsStructure()} />;
}
