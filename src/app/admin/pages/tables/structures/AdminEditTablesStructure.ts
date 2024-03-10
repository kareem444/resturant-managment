import { IFormComponentProperties } from 'src/common/components/FormComponent';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminTablesInputsStructure } from './AdminTablesInputsStructure';
import { TRANSLATE } from 'src/common/constants/TranslateConstants';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import { IAdminTablesModel } from 'src/app/admin/models/AdminTablesModel';
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer';
import { IAdminTablesInputs } from '../interfaces/AdminTablesInterface';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminTablesRepo } from '../repo/AdminTablesRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import useModalReducer from 'src/common/redux/modal/useModalReducer';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const AdminEditTablestructure = (): IFormComponentProperties => {
  const { translate } = useTranslate();
  const { state: selectedTables } = useEchoState<IAdminTablesModel>(
    EchoStateConstants.selectedItem
  );
  const { closeModal } = useModalReducer();
  const { updateOperation } = useCrudHandler<IAdminTablesModel>('tables');

  const { mutate, isLoading } = useMutate({
    queryFn: (data) => AdminTablesRepo.updateTables(selectedTables?.id!, data),
    options: {
      onSuccess(_, param: IAdminTablesInputs) {
        updateOperation({ ...selectedTables, ...param });
        showNotification('Tables updated successfully');
        closeModal();
      },
      onError(e) {
        showNotification(e?.code, 'error');
      },
    },
  });

  const handelOnSubmit = (data: IAdminTablesInputs) => mutate(data);

  const button: AdminButtonContainerProps = {
    text: translate(TRANSLATE.EDIT),
    icon: 'fi-rr-pencil',
    isLoading,
  };

  const defaultValues: IAdminTablesInputs = {
    number: selectedTables?.number || '',
  };

  return {
    inputs: AdminTablesInputsStructure(),
    button,
    onSubmit: handelOnSubmit,
    defaultValues: defaultValues as any,
  };
};
