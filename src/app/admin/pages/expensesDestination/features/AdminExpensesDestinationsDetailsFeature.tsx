import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import { AdminGetExpensesDestinationStructure } from "../structures/AdminGetExpensesDestinationStructure";

const AdminExpensesDestinationsDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetExpensesDestinationStructure()} />;
};

export default AdminExpensesDestinationsDetailsFeature;
