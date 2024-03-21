import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetExpensesStructure from "../structures/AdminGetExpensesStructure";

export default function AdminExpensesDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetExpensesStructure()} />;
}
