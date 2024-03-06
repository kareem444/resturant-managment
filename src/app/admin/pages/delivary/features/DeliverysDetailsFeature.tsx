import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function DeliveryDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditAdditionModal = () => {
        openModel({
            modalComponent: 'adminEditDeliveryModal',
            size: '3xl',
            title: {
                text: 'Edit Addition'
            },
        })
    }

    const openDeleteAdditionModal = () => {
        openModel({
            modalComponent: 'adminDeleteDeliveryModal',
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
        header: ['Name', 'Mobile', 'Branch', 'Date'],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Mobile: (item: any) => item['amount'] + "$",
            Branch: (item: any) => item['location'],
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
