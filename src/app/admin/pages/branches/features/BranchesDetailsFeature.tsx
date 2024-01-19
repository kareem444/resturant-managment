import { ITableContent } from '../../../../../common/components/TableComponent'
import AdminModalActionsStructure from 'src/app/admin/structure/modal/AdminModalActionsStructure'
import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import { AdminBranchesRepo } from '../repo/AdminBranchesRepo'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'

export default function BranchesDetailsFeature() {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure()
    const { setState } = useEchoState<IAdminBranchModel>(EchoStateConstants.selectedItem)

    const { data, isLoading, isError } = useFetch<IAdminBranchModel[]>({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInit: true,
            echoState: 'all'
        }
    })

    const tableContent: ITableContent = {
        header: ['Name', 'Code', 'Address', 'Start Time', 'End Time'],
        items: data ?? [],
        selectors: {
            Code: (item: IAdminBranchModel) => item.branchCode,
            Address: (item: IAdminBranchModel) => item.address,
            StartTime: (item: IAdminBranchModel) => item.startTime,
            EndTime: (item: IAdminBranchModel) => item.endTime
        },
        nameSelector: (item: IAdminBranchModel) => item.name,
        buttons: {
            onEdit: (item: IAdminBranchModel) => {
                setState(item)
                openEditModal('adminEditBranchModal')
            },
            onDelete: (item: IAdminBranchModel) => {
                setState(item)
                openDeleteModal('adminDeleteBranchModal', {
                    onClick: 'onDeleteBranchModalDelete'
                })
            }
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
