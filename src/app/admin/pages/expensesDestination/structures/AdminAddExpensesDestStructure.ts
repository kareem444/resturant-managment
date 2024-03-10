import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { TRANSLATE } from 'src/common/constants/TranslateConstants';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminExpensesDestInputsStructure } from './AdminExpensesDestInputsStructure';
import { IAdminExpensesDestInputs } from '../interfaces/AdminExpensesDestInterface';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminExpensesDestsRepo } from '../repo/AdminExpensesDestRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { IAdminExpensesDestModel } from 'src/app/admin/models/AdminExpensesDestModel';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminAddExpensesDestStructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { createOperation } = useCrudHandler<IAdminExpensesDestModel>('expensesDest');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminExpensesDestsRepo.createExpensesDest(data),
    options: {
      onSuccess(id, param: IAdminExpensesDestInputs) {
        createOperation({ ...param, id });
        showNotification('Expenses Destinations added successfully');
      },
      onError(e) {
        showNotification(e?.code, 'error');
      },
    },
  });

  const handelOnSubmit = (data: IAdminExpensesDestInputs) => mutate(data);

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.ADD),
    icon: 'fi-rr-plus',
    isLoading,
  };

  const defaultValues: IAdminExpensesDestInputs = {
    name: '',
  };

  return {
    inputs: AdminExpensesDestInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
