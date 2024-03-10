import { IAdminTablesModel } from 'src/app/admin/models/AdminTablesModel';
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { AdminTablesRepo } from '../repo/AdminTablesRepo';
import { showNotification } from 'src/common/components/ShowNotificationComponent';
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants';
import useCrudHandler from 'src/common/hooks/useCrudHandler';

export const OnDeleteTablesModalDeleteEvent = (): {
  click: () => void;
} => {
  const { state: selectedTables } = useEchoState<IAdminTablesModel>(
    EchoStateConstants.selectedItem
  );
  const { deleteOperation } = useCrudHandler<IAdminTablesModel>('tables');

  const { mutate } = useMutate({
    queryFn: () => AdminTablesRepo.deleteTables(selectedTables.id!),
    options: {
      onSuccess() {
        deleteOperation(selectedTables);
        showNotification('Tables deleted successfully');
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
