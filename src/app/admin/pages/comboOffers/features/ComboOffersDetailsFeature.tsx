import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'


export default function ComboOffersDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditComboOfferModal = () => {
        openModel({
            modalComponent: 'adminEditComboOfferModal',
            size: '3xl',
            title: {
                text: 'Edit ComboOffer'
            },
        })
    }

    const openDeleteComboOfferModal = () => {
        openModel({
            modalComponent: 'adminDeleteComboOfferModal',
            size: 'sm',
            title: {
                text: 'Delete ComboOffer'
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
        filter: ['Name'],
        defaultFilterItem: 'Date',
        showFilterDropDown: true,
        items: RECENT_TRANSACTIONS,
        selectors: {
            Date: (item: any) => moment(item['date']).format('D MMM')
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditComboOfferModal(),
            onDelete: (item: any) => openDeleteComboOfferModal()
        },
        isDraggable: false,
        onDrag: (item: any) => { }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
