import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'


export default function ProductsDetailsFeature() {
    const { openModel } = useModalReducer()

    const openEditProductModal = () => {
        openModel({
            modalComponent: 'adminEditProductModal',
            size: '3xl',
            title: {
                text: 'Edit Product'
            },
        })
    }

    const openDeleteProductModal = () => {
        openModel({
            modalComponent: 'adminDeleteProductModal',
            size: 'sm',
            title: {
                text: 'Delete Product'
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
            onEdit: (item: any) => openEditProductModal(),
            onDelete: (item: any) => openDeleteProductModal()
        },
        isDraggable: false,
        onDrag: (item: any) => { }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
