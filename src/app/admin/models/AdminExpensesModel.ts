import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminExpensesInputs } from "../pages/expenses/interfaces/AdminExpensesInterface";

export interface IAdminExpensesModel
    extends IAppModel,
    Omit<IAdminExpensesInputs, "branchId" | "expensesDestinationId" | "paymentMethodId"> {
    branch?: {
        id: string;
        name: string;
    };
    expensesDestination?: {
        id: string;
        name: string;
    };
    paymentMethod?: {
        id: string;
        name: string;
    };
}
