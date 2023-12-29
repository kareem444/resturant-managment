import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function SuppliersDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditSupplierModal = () => {
        openModel({
            modalComponent: 'adminEditSupplierModal',
            size: '3xl',
            title: {
                text: 'Edit Supplier'
            },
        })
    }

    const openDeleteSupplierModal = () => {
        openModel({
            modalComponent: 'adminDeleteSupplierModal',
            size: 'sm',
            title: {
                text: 'Delete Supplier'
            },
            closeButton: {
                showCloseButton: true
            },
            buttons: [
                {
                    text: 'Delete',
                }
            ]
        })
    }

    const tableContent: ITableContent = {
        header: ['Name', 'Mobile', 'TaxNumber', "Address", 'Date'],
        items: RECENT_TRANSACTIONS,
        showFilterDropDown: true,
        filter: ['Name', 'Mobile', 'TaxNumber', "Address"],
        defaultFilterItem: 'Name',
        selectors: {
            Mobile: (item: any) => item['email'],
            TaxNumber: (item: any) => item['amount'],
            Address: (item: any) => item['location'],
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditSupplierModal(),
            onDelete: (item: any) => openDeleteSupplierModal(),
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
