import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import useProductUiReducer from '../redux/ui/useProductUiReducer'

export default function ProductsDetailsFeature() {
    const { openModel } = useModalReducer()
    const { resetProduct } = useProductUiReducer()

    const openEditProductModal = () => {
        resetProduct()
        openModel({
            modalComponent: 'adminEditProductModal',
            size: '5xl',
            title: {
                text: 'Edit Product'
            },
            onClose: 'onEditProductModalClose',
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
                    onClick: 'onDeleteProductModalDelete',
                }
            ]
        })
    }

    const tableContent: ITableContent = {
        header: ['Name', 'Date'],
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
