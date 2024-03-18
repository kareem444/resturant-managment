import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import { IAdminPaymentsMethods } from "../interface/AdminPaymentsMethodsInterface";

export const handelPaymentMethodDefaultValue = (
    data: IAdminPaymentsMethodsModel[] | undefined,
    item: IAdminPaymentsMethods
): boolean => {
    if (data) {
        const paymentMethod = data.find(
            (paymentMethod) => paymentMethod.name === item.name
        );
        return paymentMethod?.active ?? item.active;
    }
    return item.active;
};
