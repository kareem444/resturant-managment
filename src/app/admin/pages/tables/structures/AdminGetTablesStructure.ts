import { IAdminDetailsStatusContainerProps } from 'src/app/admin/containers/AdminDetailsStatusContainer';
import { ITableContent } from '../../../../../common/components/TableComponent';
import AdminModalActionsStructure from 'src/app/admin/structure/modal/AdminModalActionsStructure';
import useFetch from 'src/common/DataHandler/hooks/server/useFetch';
import { AdminTablesRepo } from '../repo/AdminTablesRepo';
import { IAdminTablesModel } from 'src/app/admin/models/AdminTablesModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { AdminTablesTableHeaderConstants } from '../constants/AdminTablesTableConstants';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import moment from 'moment';

export const AdminGetTablestructure = (): IAdminDetailsStatusContainerProps => {
  const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
  const { setState } = useEchoState(EchoStateConstants.selectedItem);

  const { data, isLoading, isError, query } = useFetch<IAdminTablesModel[]>({
    key: AsyncStateConstants.tables,
    queryFn: AdminTablesRepo.getTables,
    options: {
      isExecuteOnInitIfNoData: true,
      echoState: 'all',
      onError: (e) => showNotification(e?.code, 'error'),
    },
  });

  const tableContent: ITableContent = {
    header: AdminTablesTableHeaderConstants,
    items: data || [],
    selectors: {
      Date: (item: IAdminTablesModel) => moment(item.createdAt).format('D MMM'),
    },
    nameSelector: (item: IAdminTablesModel) => item.number,
    buttons: {
      onEdit: (item: IAdminTablesModel) => {
        setState(item);
        openEditModal('adminEditTableModal', {
          formatTitle: 's',
        });
      },
      onDelete: (item: IAdminTablesModel) => {
        setState(item);
        openDeleteModal('adminDeleteTableModal', 'onDeleteTableModalDelete', {
          formatTitle: 's',
        });
      },
    },
  };

  return {
    isData: !!data && data.length > 0,
    isLoading,
    isError,
    tableContent,
    onRefresh: query,
  };
};
