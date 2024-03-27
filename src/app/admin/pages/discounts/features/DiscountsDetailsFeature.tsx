import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import useModalReducer from 'src/common/redux/modal/useModalReducer'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'

export default function DiscountsDetailsFeature() {
    const { openModel } = useModalReducer()
    const { translate } = useTranslate();
    const openEditDiscountModal = () => {
        openModel({
            modalComponent: 'adminEditDiscountModal',
            size: '3xl',
            title: {
                text: 'Edit Discount'
            },
        })
    }

    const openDeleteDiscountModal = () => {
        openModel({
            modalComponent: 'adminDeleteDiscountModal',
            size: 'sm',
            title: {
                text: 'Delete Dis'
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
        header: [translate(TRANSLATE.NAME), translate(TRANSLATE.AMOUNT), translate(TRANSLATE.TYPE), translate(TRANSLATE.BRANCH), translate(TRANSLATE.APPLY_TO),translate(TRANSLATE.Date)],
        items: RECENT_TRANSACTIONS,
        maxStringLength: 15,
        selectors: {
            Amount: (item: any) => item['amount'],
            Type: (item: any) => "Ratio",
            Branch: (item: any) => item['location'],
            'Apply To': (item: any) => "Order",
            Date: (item: any) => moment(item['date']).format('D-MM-YYYY'),
        },
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => openEditDiscountModal(),
            onDelete: (item: any) => openDeleteDiscountModal()
        }
    }

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}