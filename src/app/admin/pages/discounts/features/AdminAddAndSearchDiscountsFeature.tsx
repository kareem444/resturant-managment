import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminDiscountsFilterConstants } from '../constants/AdminDiscountsFilterConstants';
import useScreenSize from 'src/common/hooks/useScreenSize';

const AdminAddAndSearchDiscountsFeature = () => {
    const { isSm } = useScreenSize()
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddDiscountModal'
            filter={{
                items: AdminDiscountsFilterConstants,
                originalItemsKey: "discounts",
                containerClassName: isSm ? '!w-full' : ''
            }}
            formatTitle='none'
            addModalSize='5xl'
            onModalClose='onDiscountModalClose'
            isEnableAdd={!isSm}
        />
    )
};

export default AdminAddAndSearchDiscountsFeature;
