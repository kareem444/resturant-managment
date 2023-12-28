import { ITableContent } from '../../../../../common/components/TableComponent'
import { AdminDetailsPageContainer } from '../../../containers/AdminDetailsPageContainer'
import { PAYMENTS_WAY_SRC } from 'src/common/constants/SrcConstants'

const tableContent: ITableContent = {
    header: ["Avatar", 'Name'],
    items: PAYMENTS_WAY_SRC.reverse(),
    selectors: {
        Name: (item: any) => item['name'],
    },
    avatarSelector: (item: any) => item['avatar'],
    buttons: {
        switch: {
            defaultValue: true,
            onSwitch: (value: boolean, item: any) => { console.log(value, item) }
        },
    }
}

export default function PaymentsMethodsDetailsFeature() {
    return (
        <AdminDetailsPageContainer tableContent={tableContent} />
    )
}
