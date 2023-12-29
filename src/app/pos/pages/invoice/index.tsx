import { ITableContent } from 'src/common/components/TableComponent';
import moment from 'moment';
import { AdminDetailsPageContainer } from 'src/app/admin/containers/AdminDetailsPageContainer';
import PosInvoiceHeaderFeature from './features/PosInvoiceHeaderFeature';
import { DUMMY_INVOICE_DATA } from '../../../../common/utils/dummyData';

const tableContent: ITableContent = {
    header: ['Id', 'Type', 'Price', 'Date'],
    items: DUMMY_INVOICE_DATA,
    selectors: {
        Id: (item: any) => item['id'],
        Type: (item: any) => item['type'],
        Price: (item: any) => `$${item['price']}`,
        Date: (item: any) => moment(item['date']).format('DD/MM/YYYY hh:mm A'),
    },
}

export default function PosInvoicePage() {
    return (
        <div className='flex flex-col h-full'>
            <div className='my-4'>
                <PosInvoiceHeaderFeature />
            </div>
            <AdminDetailsPageContainer tableContent={tableContent} className='mb-4'/>
        </div>
    )
}
