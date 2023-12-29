import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function TaxesDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditTaxModal = () => {
        openModel({
            modalComponent: 'adminEditTaxModal',
            size: '3xl',
            title: {
                text: 'Edit Tax'
            },
        })
    }

    const openDeleteTaxModal = () => {
        openModel({
            modalComponent: 'adminDeleteTaxModal',
            size: 'sm',
            title: {
                text: 'Delete Tax'
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
        header: ['Name', "Amount", "Branch", 'Date'],
        filter: ['Name'],
        defaultFilterItem: 'Name',
        items: RECENT_TRANSACTIONS,
        selectors: {
            Amount: (item: any) => item['amount'],
            Branch: (item: any) => item['location'],
            Date: (item: any) => moment(item['date']).format('D-MM-YYYY hh:mm:ss A'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditTaxModal(),
            onDelete: (item: any) => openDeleteTaxModal()
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
