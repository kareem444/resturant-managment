import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function ExpensesDestinationDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditExpensesDestinationModal = () => {
        openModel({
            modalComponent: 'adminEditExpensesDestinationModal',
            size: '3xl',
            title: {
                text: 'Edit Expenses Destination'
            },
        })
    }

    const openDeleteExpensesDestinationModal = () => {
        openModel({
            modalComponent: 'adminDeleteExpensesDestinationModal',
            size: 'sm',
            title: {
                text: 'Delete Expenses Destination'
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
        header: ['Name', 'Date'],
        items: RECENT_TRANSACTIONS,
        showFilterDropDown: true,
        filter: ['Name'],
        defaultFilterItem: 'Destination',
        nameSelector: (item: any) => item['name'],
        selectors: {
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        buttons: {
            onEdit: (item: any) => openEditExpensesDestinationModal(),
            onDelete: (item: any) => openDeleteExpensesDestinationModal(),
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
