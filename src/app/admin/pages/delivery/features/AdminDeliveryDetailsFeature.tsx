import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetDeliveryStructure from "../structures/AdminGetDeliveryStructure";

export default function AdminDeliveryDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetDeliveryStructure()} />;
}
