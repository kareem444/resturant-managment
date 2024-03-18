import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { ITableContent } from "src/common/components/TableComponent";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { PAYMENTS_WAY_SRC } from "src/common/constants/SrcConstants";
import { AdminPaymentsMethodsRepo } from "../repo/AdminPaymentsMethodsRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { IAdminPaymentsMethods } from "../interface/AdminPaymentsMethodsInterface";
import { handelPaymentMethodDefaultValue } from "../services/AdminPaymentsMethodsServices";
import { AdminPaymentMethodTableHeaderConstants } from "../constants/AdminPaymentMethodTableConstants";

export const AdminPaymentsMethodsStructure =
    (): IAdminDetailsStatusContainerProps => {
        const {
            data,
            isLoading: isGetLoading,
            isError: isGetError,
        } = useFetch<IAdminPaymentsMethodsModel[]>({
            key: AsyncStateConstants.paymentMethods,
            queryFn: AdminPaymentsMethodsRepo.getPaymentsMethods,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const { mutate, isError: isMutateError } = useMutate({
            queryFn: (data) =>
                AdminPaymentsMethodsRepo.setPaymentMethod(data.id, data),
            options: {
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminPaymentMethodTableHeaderConstants,
            items: PAYMENTS_WAY_SRC,
            selectors: {
                Name: (item: IAdminPaymentsMethods) => item.name,
            },
            avatarSelector: (item: IAdminPaymentsMethods) => item.avatar,
            buttons: {
                switch: {
                    defaultValueSelector: (item: IAdminPaymentsMethods) =>
                        handelPaymentMethodDefaultValue(data, item),
                    onSwitch: (value: boolean, item: IAdminPaymentsMethods) =>
                        mutate({ id: item.name, active: value, name: item.name }),
                },
            },
        };

        return {
            isData: !!PAYMENTS_WAY_SRC,
            isLoading: isGetLoading,
            isError: isGetError || isMutateError,
            tableContent,
        };
    };
