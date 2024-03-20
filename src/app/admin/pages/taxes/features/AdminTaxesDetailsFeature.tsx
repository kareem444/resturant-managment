import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetTaxesStructure from "../structures/AdminGetTaxesStructure";

export default function AdminTaxDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetTaxesStructure()} />;
}
