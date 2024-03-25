import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminProductsFilterConstants } from '../constants/AdminProductsFilterConstants';
import useScreenSize from 'src/common/hooks/useScreenSize';

const AdminAddAndSearchProductsFeature = () => {
    const { isSm } = useScreenSize()
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddProductModal'
            filter={{
                items: AdminProductsFilterConstants,
                originalItemsKey: "products",
                containerClassName: isSm ? '!w-full' : ''
            }}
            formatTitle='none'
            addModalSize='5xl'
            onModalClose='onProductModalClose'
            isEnableAdd={!isSm}
        />
    )
};

export default AdminAddAndSearchProductsFeature;
