import { RECENT_TRANSACTIONS } from '../../../../../common/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'

export default function ProductsReportsDetailsFeature() {
    const { translate } = useTranslate()
    const tableContent: ITableContent = {
        header: [translate(`${TRANSLATE.NAME}`), translate(`${TRANSLATE.EMAIL}`), translate(`${TRANSLATE.ADDRESS}`), translate(`${TRANSLATE.AMOUNT}`), translate(`${TRANSLATE.Date}`)],
        items: RECENT_TRANSACTIONS,
        selectors: {
            Email: (item: any) => item['email'],
            Location: (item: any) => item['location'],
            Amount: (item: any) => `$${item['amount']}`,
            Date: (item: any) => moment(item['date']).format('D MMM'),
        },
        avatarSelector: (item: any) => item['avatar'],
        nameSelector: (item: any) => item['name'],
        buttons: {
            onEdit: (item: any) => { },
            onDelete: (item: any) => { },
            onPrint: (item: any) => { },
            onLock: (item: any) => { },
        }
    }
    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
