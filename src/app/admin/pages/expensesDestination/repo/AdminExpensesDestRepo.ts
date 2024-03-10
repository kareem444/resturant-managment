import { FireStoreHelper } from 'src/common/firebaseHandler/helper/FireStoreHelper';
import { IAdminExpensesDestInputs } from '../interfaces/AdminExpensesDestInterface';
import { FireStoreCollectionsConstants } from 'src/common/constants/FireStoreCollectionsConstants';
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper';

export class AdminExpensesDestsRepo {
  static createExpensesDest = async (data: IAdminExpensesDestInputs): Promise<string> => {
    return await AsyncHelper.createPromise(async () => {
      return await FireStoreHelper.add(FireStoreCollectionsConstants.EXPENSES_DEST, data, {
        isAuthGuard: true,
      });
    });
  };

  static getExpensesDests = async () => {
    return await AsyncHelper.createPromise(async () => {
      const ExpensesDest = await FireStoreHelper.find(FireStoreCollectionsConstants.EXPENSES_DEST, {
        isAuthGuard: true,
        orderBy: [{ field: 'createdAt', direction: 'desc' }],
      });
      return ExpensesDest;
    });
  };

  static updateExpensesDest = async (id: string, data: IAdminExpensesDestInputs) => {
    return await AsyncHelper.createPromise(async () => {
      await FireStoreHelper.update(FireStoreCollectionsConstants.EXPENSES_DEST, id, data, {
        isAuthGuard: true,
      });
    });
  };

  static deleteExpensesDest = async (id: string) => {
    return await AsyncHelper.createPromise(async () => {
      await FireStoreHelper.delete(FireStoreCollectionsConstants.EXPENSES_DEST, id, {
        isAuthGuard: true,
      });
    });
  };
}
