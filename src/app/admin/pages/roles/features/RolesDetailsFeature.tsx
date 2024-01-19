import moment from 'moment'
import { ITableContent } from '../../../../../common/components/TableComponent'
import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer'
import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { AdminRolesRepo } from '../repo/AdminRolesRepo'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import AdminModalActionsStructure from 'src/app/admin/structure/modal/AdminModalActionsStructure'

export default function RolesDetailsFeature() {
    const { openDeleteModal } = AdminModalActionsStructure()
    const { setState } = useEchoState(EchoStateConstants.selectedItem)

    const { data, isLoading, isError } = useFetch<IAdminRoleModel[]>({
        key: AsyncStateConstants.roles,
        queryFn: () => AdminRolesRepo.getRoles(),
        options: {
            isExecuteOnInit: true,
            echoState: 'all'
        }
    })

    const tableContent: ITableContent = {
        header: ['Name', 'Role Type', 'Date'],
        items: data ?? [],
        selectors: {
            RoleType: (item: IAdminRoleModel) => item.role,
            Date: (item: IAdminRoleModel) => moment(item.createdAt).format('D MMM'),
        },
        nameSelector: (item: IAdminRoleModel) => item.name,
        buttons: {
            onDelete: (item: IAdminRoleModel) => {
                setState(item)
                openDeleteModal('adminDeleteRoleModal', {
                    onClick: 'onDeleteRoleModalDelete'
                })
            },
        }
    }

    return (
        <AdminDetailsStatusContainer
            tableContent={tableContent}
            isLoading={isLoading && !data}
            isError={isError}
            isData={!!data && data.length > 0}
        />
    )
}