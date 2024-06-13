import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetComboOffersStructure from "../structures/AdminGetComboOffersStructure";

export default function AdminComboOffersDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetComboOffersStructure()} />;
}
