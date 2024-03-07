import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetMembersStructure from "../structures/AdminGetMembersStructure";

export default function AdminMembersDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetMembersStructure()} />;
}
