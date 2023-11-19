import { RECENT_TRANSACTIONS } from '../../../../../unUsed/utils/dummyData'
import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'

const tableContent: ITableContent = {
    header: ['Name', 'Email', 'Location', 'Amount', 'Date'],
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

export default function BouncedPurchasesDetailsFeature() {

    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
