import AdminAddAndSearchContainer from 'src/app/admin/containers/AdminAddAndSearchContainer'
import { AdminTaxFilterConstants } from '../constants/AdminTaxesFilterConstants';

const AdminAddAndSearchTaxFeature = () => {
    return (
        <AdminAddAndSearchContainer
            addModalComponent='adminAddTaxModal'
            filter={{
                items: AdminTaxFilterConstants,
                originalItemsKey: "taxes",
            }}
            formatTitle='es'
        />
    )
};

export default AdminAddAndSearchTaxFeature;
