import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper';
import { IAdminTablesInputs } from '../interfaces/AdminTablesInterface';
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants';
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper';

export class AdminTablesRepo {
  static createTables = async (data: IAdminTablesInputs): Promise<string> => {
    return await AsyncHelper.createPromise(async () => {
      return await FireStoreHelper.add(FireStoreCollectionsConstants.TABLES, data, {
        isAuthGuard: true,
      });
    });
  };

  static getTables = async () => {
    return await AsyncHelper.createPromise(async () => {
      const Tables = await FireStoreHelper.find(FireStoreCollectionsConstants.TABLES, {
        isAuthGuard: true,
        orderBy: [{ field: 'createdAt', direction: 'desc' }],
      });
      return Tables;
    });
  };

  static updateTables = async (id: string, data: IAdminTablesInputs) => {
    return await AsyncHelper.createPromise(async () => {
      await FireStoreHelper.update(FireStoreCollectionsConstants.TABLES, id, data, {
        isAuthGuard: true,
      });
    });
  };

  static deleteTables = async (id: string) => {
    return await AsyncHelper.createPromise(async () => {
      await FireStoreHelper.delete(FireStoreCollectionsConstants.TABLES, id, { isAuthGuard: true });
    });
  };
}
