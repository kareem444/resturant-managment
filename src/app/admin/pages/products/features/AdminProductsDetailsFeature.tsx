import AdminDetailsStatusContainer from "src/app/admin/containers/AdminDetailsStatusContainer";
import AdminGetProductsStructure from "../structures/AdminGetProductsStructure";

export default function AdminProductsDetailsFeature() {
    return <AdminDetailsStatusContainer {...AdminGetProductsStructure()} />;
}
