import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { FireStoreCollectionsConstants } from "src/common/constants/FireStoreCollectionsConstants";
import { FireStoreHelper } from "src/common/firebaseHandler/helper/FireStoreHelper";
import { IAdminExpensesModel } from "src/app/admin/models/AdminExpensesModel";
import { IAdminExpensesInputs } from "../interfaces/AdminExpensesInterface";
import { AdminBranchesRepo } from "../../branches/repo/AdminBranchesRepo";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { ErrorsConstants } from "src/common/constants/ErrorsConstants";
import { IAdminExpensesDestinationModel } from "src/app/admin/models/AdminExpensesDestinationModel";
import { AdminExpensesDestinationsRepo } from "../../expensesDestination/repo/AdminExpensesDestinationsRepo";
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import { AdminPaymentsMethodsRepo } from "../../paymentsMethods/repo/AdminPaymentsMethodsRepo";

export class AdminExpensesRepo {
    static createExpenses = (
        expenses: IAdminExpensesInputs
    ): Promise<IAdminExpensesModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const expensesDestinations: IAdminExpensesDestinationModel[] =
                await AdminExpensesDestinationsRepo.getExpensesDestinations();
            const paymentsMethods: IAdminPaymentsMethodsModel[] =
                await AdminPaymentsMethodsRepo.getActivePaymentsMethods();

            const branch = branches?.find(
                (branch) => branch.id === expenses.branchId
            );
            const expensesDestination = expensesDestinations?.find(
                (expensesDestination) =>
                    expensesDestination.id === expenses.expensesDestinationId
            );
            const paymentMethod = paymentsMethods?.find(
                (paymentMethod) => paymentMethod.id === expenses.paymentMethodId
            );

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            if (!expensesDestination) {
                throw ErrorsConstants.EXPENSES_DESTINATION_NOT_EXIST;
            }

            if (expenses.paymentMethodId && !paymentMethod) {
                throw ErrorsConstants.PAYMENT_METHOD_NOT_EXIST;
            }

            const id: string = await FireStoreHelper.add(
                FireStoreCollectionsConstants.EXPENSES,
                expenses,
                { isAuthGuard: true }
            );

            return {
                ...expenses,
                id,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string,
                },
                expensesDestination: {
                    id: expensesDestination?.id as string,
                    name: expensesDestination?.name as string,
                },
                paymentMethod: expenses.paymentMethodId
                    ? {
                        id: paymentMethod?.id as string,
                        name: paymentMethod?.name as string,
                    }
                    : undefined,
            };
        });
    };

    static getExpenses = async (): Promise<IAdminExpensesModel[] | undefined> => {
        return AsyncHelper.createPromise(async () => {
            const expenses:
                | (IAdminExpensesInputs & IAdminExpensesModel)[]
                | undefined = await FireStoreHelper.find(
                    FireStoreCollectionsConstants.EXPENSES,
                    {
                        isAuthGuard: true,
                        orderBy: [{ field: "createdAt", direction: "desc" }],
                    }
                );
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const expensesDestinations: IAdminExpensesDestinationModel[] =
                await AdminExpensesDestinationsRepo.getExpensesDestinations();
            const paymentsMethods: IAdminPaymentsMethodsModel[] =
                await AdminPaymentsMethodsRepo.getPaymentsMethods();

            const refactorExpenses = expenses?.map((el) => {
                if (!!el.branchId) {
                    const branch = branches?.find((branch) => branch.id === el.branchId);

                    if (branch) {
                        el.branch = {
                            id: branch?.id as string,
                            name: branch?.name as string,
                        };
                    }
                }

                if (!!el.expensesDestinationId) {
                    const expensesDestination = expensesDestinations?.find(
                        (expensesDestination) =>
                            expensesDestination.id === el.expensesDestinationId
                    );

                    if (expensesDestination) {
                        el.expensesDestination = {
                            id: expensesDestination?.id as string,
                            name: expensesDestination?.name as string,
                        };
                    }
                }

                if (!!el.paymentMethodId) {
                    const paymentMethod = paymentsMethods?.find(
                        (paymentMethod) => paymentMethod.id === el.paymentMethodId
                    );

                    if (paymentMethod) {
                        el.paymentMethod = {
                            id: paymentMethod?.id as string,
                            name: paymentMethod?.name as string,
                        };
                    }
                }

                delete el.branchId;
                delete el.expensesDestinationId;
                delete el.paymentMethodId;
                return el;
            });

            return refactorExpenses as IAdminExpensesModel[];
        });
    };

    static updateExpenses = (
        expensesId: string,
        expenses: IAdminExpensesInputs
    ): Promise<IAdminExpensesModel> => {
        return AsyncHelper.createPromise(async () => {
            const branches: IAdminBranchModel[] =
                await AdminBranchesRepo.getBranches();
            const expensesDestinations: IAdminExpensesDestinationModel[] =
                await AdminExpensesDestinationsRepo.getExpensesDestinations();
            const paymentsMethods: IAdminPaymentsMethodsModel[] =
                await AdminPaymentsMethodsRepo.getActivePaymentsMethods();

            const branch = branches?.find(
                (branch) => branch.id === expenses.branchId
            );
            const expensesDestination = expensesDestinations?.find(
                (expensesDestination) =>
                    expensesDestination.id === expenses.expensesDestinationId
            );
            const paymentMethod = paymentsMethods?.find(
                (paymentMethod) => paymentMethod.id === expenses.paymentMethodId
            );

            if (!branch) {
                throw ErrorsConstants.BRANCH_NOT_EXIST;
            }

            if (!expensesDestination) {
                throw ErrorsConstants.EXPENSES_DESTINATION_NOT_EXIST;
            }

            if (expenses.paymentMethodId && !paymentMethod) {
                throw ErrorsConstants.PAYMENT_METHOD_NOT_EXIST;
            }

            await FireStoreHelper.update(
                FireStoreCollectionsConstants.EXPENSES,
                expensesId,
                expenses,
                { isAuthGuard: true }
            );

            return {
                ...expenses,
                branch: {
                    id: branch?.id as string,
                    name: branch?.name as string,
                },
                expensesDestination: {
                    id: expensesDestination?.id as string,
                    name: expensesDestination?.name as string,
                },
                paymentMethod: expenses.paymentMethodId
                    ? {
                        id: paymentMethod?.id as string,
                        name: paymentMethod?.name as string,
                    }
                    : undefined,
            };
        });
    };

    static deleteExpenses = (ExpensesId: string) => {
        return AsyncHelper.createPromise(async () => {
            return await FireStoreHelper.delete(
                FireStoreCollectionsConstants.EXPENSES,
                ExpensesId,
                { isAuthGuard: true }
            );
        });
    };
}
