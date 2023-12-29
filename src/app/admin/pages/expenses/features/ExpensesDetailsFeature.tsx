import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function ExpensesDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditExpensesModal = () => {
        openModel({
            modalComponent: 'adminEditExpensesModal',
            size: '3xl',
            title: {
                text: 'Edit Expenses'
            },
        })
    }

    const openDeleteExpensesModal = () => {
        openModel({
            modalComponent: 'adminDeleteExpensesModal',
            size: 'sm',
            title: {
                text: 'Delete Expenses'
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
        header: ['Destination', 'Amount', 'PayType', "Branch", "Description", 'Date'],
        items: RECENT_TRANSACTIONS,
        showFilterDropDown: true,
        filter: ['Destination', 'Amount', 'PayType', "Branch"],
        defaultFilterItem: 'Destination',
        selectors: {
            Destination: (item: any) => item['name'],
            Amount: (item: any) => '$' + item['amount'],
            PayType: (item: any) => item['name'],
            Branch: (item: any) => item['location'],
            Description: (item: any) => item['avatar'],
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        buttons: {
            onEdit: (item: any) => openEditExpensesModal(),
            onDelete: (item: any) => openDeleteExpensesModal(),
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
