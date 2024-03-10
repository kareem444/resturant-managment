import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminExpensesDestInputsStructure } from './AdminExpensesDestInputsStructure';
import { TRANSLATE } from 'src/common/constants/TranslateConstants';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { IAdminExpensesDestModel } from 'src/app/admin/models/AdminExpensesDestModel';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import { IAdminExpensesDestInputs } from '../interfaces/AdminExpensesDestInterface';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminExpensesDestsRepo } from '../repo/AdminExpensesDestRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import useModalReducer from 'src/common/redux/modal/useModalReducer';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminEditExpensesDestStructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { state: selectedExpensesDest } = useEchoState<IAdminExpensesDestModel>(
    EchoStateConstants.selectedItem
  );
  const { closeModal } = useModalReducer();
  const { updateOperation } = useCrudHandler<IAdminExpensesDestModel>('expensesDest');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminExpensesDestsRepo.updateExpensesDest(selectedExpensesDest?.id!, data),
    options: {
      onSuccess(_, param: IAdminExpensesDestInputs) {
        updateOperation({ ...selectedExpensesDest, ...param });
        showNotification('ExpensesDest updated successfully');
        closeModal();
      },
      onError(e) {
        showNotification(e?.code, 'error');
      },
    },
  });

  const handelOnSubmit = (data: IAdminExpensesDestInputs) => mutate(data);

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.EDIT),
    icon: 'fi-rr-pencil',
    isLoading,
  };

  const defaultValues: IAdminExpensesDestInputs = {
    name: selectedExpensesDest?.name || '',
  };

  return {
    inputs: AdminExpensesDestInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
