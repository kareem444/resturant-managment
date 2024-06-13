import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminComboOffersFilterConstants } from '../constants/AdminComboOffersFilterConstants';
import useScreenSize from 'src/common/hooks/useScreenSize';

const AdminAddAndSearchComboOffersFeature = () => {
    const { isSm } = useScreenSize()
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddComboOfferModal'
            filter={{
                items: AdminComboOffersFilterConstants,
                originalItemsKey: "comboOffers",
                containerClassName: isSm ? '!w-full' : ''
            }}
            formatTitle='none'
            addModalSize='5xl'
            onModalClose='onComboOfferModalClose'
            isEnableAdd={!isSm}
        />
    )
};

export default AdminAddAndSearchComboOffersFeature;
