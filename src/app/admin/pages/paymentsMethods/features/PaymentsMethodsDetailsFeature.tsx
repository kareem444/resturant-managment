import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer'
import { AdminPaymentsMethodsStructure } from '../structures/AdminPaymentsMethodsStructure'

export default function PaymentsMethodsDetailsFeature() {
    return (
        <AdminDetailsStatusContainer {...AdminPaymentsMethodsStructure()} />
    )
}
