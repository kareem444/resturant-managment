import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminProductsFilterConstants } from '../constants/AdminProductsFilterConstants';

const AdminAddAndSearchProductsFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddProductModal'
            filter={{
                items: AdminProductsFilterConstants,
                originalItemsKey: "products",
            }}
            formatTitle='none'
            addModalSize='5xl'
            onModalClose='onProductModalClose'
        />
    )
};

export default AdminAddAndSearchProductsFeature;
