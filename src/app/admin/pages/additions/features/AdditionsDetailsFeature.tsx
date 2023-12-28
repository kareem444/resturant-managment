import { RECENT_TRANSACTIONS } from '../../../../../unUsed/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function AdditionsDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditAdditionModal = () => {
        openModel({
            modalComponent: 'adminEditAdditionModal',
            size: '3xl',
            title: {
                text: 'Edit Addition'
            },
        })
    }

    const openDeleteAdditionModal = () => {
        openModel({
            modalComponent: 'adminDeleteAdditionModal',
            size: 'sm',
            title: {
                text: 'Delete Addition'
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
        header: ['Name', 'Price', 'Date'],
        items: RECENT_TRANSACTIONS,
        showFilterDropDown: true,
        filter: ['Name', 'Price'],
        selectors: {
            Price: (item: any) => item['amount'] + "$",
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        avatarSelector: (item: any) => item['avatar'],
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditAdditionModal(),
            onDelete: (item: any) => openDeleteAdditionModal(),
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
