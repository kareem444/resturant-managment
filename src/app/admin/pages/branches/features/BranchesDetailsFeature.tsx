import { RECENT_TRANSACTIONS } from '../../../../../unUsed/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

export default function BranchesDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditBranchModal = () => {
        openModel({
            modalComponent: 'adminEditBranchModal',
            size: '3xl',
            title: {
                text: 'Edit Branch'
            },
        })
    }

    const openDeleteBranchModal = () => {
        openModel({
            modalComponent: 'adminDeleteBranchModal',
            size: 'sm',
            title: {
                text: 'Delete Branch'
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
        header: ['Name', 'Code', "Address", "Start Time", "End Time", 'Date'],
        filter: ['Name'],
        defaultFilterItem: 'Name',
        items: RECENT_TRANSACTIONS,
        maxStringLength: 15,
        selectors: {
            Code: (item: any) => "B01",
            Address: (item: any) => item['location'],
            StartTime: (item: any) => moment(item['date']).format('HH:mm'),
            EndTime: (item: any) => moment(item['date']).format('HH:mm'),
            Date: (item: any) => moment(item['date']).format('D-MM-YYYY hh:mm:ss A'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditBranchModal(),
            onDelete: (item: any) => openDeleteBranchModal()
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}