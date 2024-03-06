import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'


export default function GroupsDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditUnitModal = () => {
        openModel({
            modalComponent: 'adminEditGroupModal',
            size: '3xl',
            title: {
                text: 'Edit Group'
            },
        })
    }

    const openDeleteUnitModal = () => {
        openModel({
            modalComponent: 'adminDeleteGroupModal',
            size: 'sm',
            title: {
                text: 'Delete Group'
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
        selectors: {
            Date: (item: any) => moment(item['date']).format('D-MM-YYYY hh:mm:ss A'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditUnitModal(),
            onDelete: (item: any) => openDeleteUnitModal()
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
