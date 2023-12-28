import { RECENT_TRANSACTIONS } from '../../../../../unUsed/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function CustomerDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditCustomerModal = () => {
        openModel({
            modalComponent: 'adminEditCustomerModal',
            size: '3xl',
            title: {
                text: 'Edit Customer'
            },
        })
    }

    const openDeleteCustomerModal = () => {
        openModel({
            modalComponent: 'adminDeleteCustomerModal',
            size: 'sm',
            title: {
                text: 'Delete Customer'
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
        header: ['Name', 'Mobile', 'TaxNumber', "Address" , 'Date'],
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
            onEdit: (item: any) => openEditCustomerModal(),
            onDelete: (item: any) => openDeleteCustomerModal(),
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
