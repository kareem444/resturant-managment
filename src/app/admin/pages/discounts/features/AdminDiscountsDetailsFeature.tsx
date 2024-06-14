import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetProductsStructure from "../structures/AdminGetDiscountsStructure";

export default function AdminDiscountsDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetProductsStructure()} />;
}
