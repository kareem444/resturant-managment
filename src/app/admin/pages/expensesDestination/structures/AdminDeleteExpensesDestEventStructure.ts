import { IAdminExpensesDestModel } from 'src/app/admin/models/AdminExpensesDestModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminExpensesDestsRepo } from '../repo/AdminExpensesDestRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const OnDeleteExpensesDestModalDeleteEvent = (): {
  click: () => void;
} => {
  const { state: selectedExpensesDest } = useEchoState<IAdminExpensesDestModel>(
    EchoStateConstants.selectedItem
  );
  const { deleteOperation } = useCrudHandler<IAdminExpensesDestModel>('expensesDest');

  const { mutate } = useMutate({
    queryFn: () => AdminExpensesDestsRepo.deleteExpensesDest(selectedExpensesDest.id!),
    options: {
      onSuccess() {
        deleteOperation(selectedExpensesDest);
        showNotification('ExpensesDest deleted successfully');
      },
      onError(e) {
        showNotification(e?.code, 'error');
      },
    },
  });

  return {
    click: () => mutate(),
  };
};
