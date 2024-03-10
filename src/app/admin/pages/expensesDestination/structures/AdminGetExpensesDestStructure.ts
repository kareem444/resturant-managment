import { IAdminDetailsStatusContainerProps } from 'src/app/admin/containers/AdminDetailsStatusContainer';
import { ITableContent } from '../../../../../common/components/TableComponent';
import AdminModalActionsStructure from 'src/app/admin/structure/modal/AdminModalActionsStructure';
import useFetch from 'src/common/DataHandler/hooks/server/useFetch';
import { AdminExpensesDestsRepo } from '../repo/AdminExpensesDestRepo';
import { IAdminExpensesDestModel } from 'src/app/admin/models/AdminExpensesDestModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import { AdminExpensesDestTableHeaderConstants } from '../constants/AdminExpensesDestTableConstants';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import moment from 'moment';

export const AdminGetExpensesDestStructure = (): IAdminDetailsStatusContainerProps => {
  const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
  const { setState } = useEchoState(EchoStateConstants.selectedItem);

  const { data, isLoading, isError, query } = useFetch<IAdminExpensesDestModel[]>({
    key: AsyncStateConstants.expensesDest,
    queryFn: AdminExpensesDestsRepo.getExpensesDests,
    options: {
      isExecuteOnInitIfNoData: true,
      echoState: 'all',
      onError: (e) => showNotification(e?.code, 'error'),
    },
  });

  const tableContent: ITableContent = {
    header: AdminExpensesDestTableHeaderConstants,
    items: data || [],
    selectors: {
      Date: (item: IAdminExpensesDestModel) => moment(item.createdAt).format('D MMM'),
    },
    nameSelector: (item: IAdminExpensesDestModel) => item.name,
    buttons: {
      onEdit: (item: IAdminExpensesDestModel) => {
        setState(item);
        openEditModal('adminEditExpensesDestinationModal', {
          formatTitle: 's',
        });
      },
      onDelete: (item: IAdminExpensesDestModel) => {
        setState(item);
        openDeleteModal('adminDeleteExpensesDestinationModal', 'onDeleteExpensesDestModalDelete', {
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
