import { RECENT_TRANSACTIONS } from '../../../../../unUsed/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function MembersDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditUnitModal = () => {
        openModel({
            modalComponent: 'adminEditMemberModal',
            size: '3xl',
            title: {
                text: 'Edit Group'
            },
        })
    }

    const openDeleteUnitModal = () => {
        openModel({
            modalComponent: 'adminDeleteMemberModal',
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
        header: ['Name', "Mobile", "Email", "Branch", "Role", 'Date'],
        filter: ['Name'],
        defaultFilterItem: 'Name',
        items: RECENT_TRANSACTIONS,
        maxStringLength: 15,
        selectors: {
            Mobile: (item: any) => "024157454",
            Email: (item: any) => item['email'],
            Branch: (item: any) => item['location'],
            Role: (item: any) => "admin",
            Date: (item: any) => moment(item['date']).format('D MMM YYYY HH:mm'),
        },
        avatarSelector: (item: any) => item['avatar'],
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
