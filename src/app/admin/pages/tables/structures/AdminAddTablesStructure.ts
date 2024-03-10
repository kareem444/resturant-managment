import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { TRANSLATE } from 'src/common/constants/TranslateConstants';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminTablesInputsStructure } from './AdminTablesInputsStructure';
import { IAdminTablesInputs } from '../interfaces/AdminTablesInterface';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminTablesRepo } from '../repo/AdminTablesRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { IAdminTablesModel } from 'src/app/admin/models/AdminTablesModel';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminAddTablestructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { createOperation } = useCrudHandler<IAdminTablesModel>('tables');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminTablesRepo.createTables(data),
    options: {
      onSuccess(id, param: IAdminTablesInputs) {
        createOperation({ ...param, id });
        showNotification('Tables added successfully');
      },
      onError(e) {
        showNotification(e?.code, 'error');
      },
    },
  });

  const handelOnSubmit = (data: IAdminTablesInputs) => mutate(data);

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.ADD),
    icon: 'fi-rr-plus',
    isLoading,
  };

  const defaultValues: IAdminTablesInputs = {
    number: '',
  };

  return {
    inputs: AdminTablesInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
