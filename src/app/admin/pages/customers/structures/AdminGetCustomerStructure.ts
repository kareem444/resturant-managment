import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminCustomersRepo } from "../repo/AdminCustomersRepo";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminCustomerTableHeaderConstants } from "../constants/AdminCustomerTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import moment from "moment";

export const AdminGetCustomerStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminCustomerModel[]>({
            key: AsyncStateConstants.customers,
            queryFn: AdminCustomersRepo.getCustomers,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminCustomerTableHeaderConstants,
            items: data || [],
            selectors: {
                Mobile: (item: IAdminCustomerModel) => item['mobile'],
                TaxNmber: (item: IAdminCustomerModel) => item['taxNumber'],
                Adress: (item: IAdminCustomerModel) => item['address'],
                Date: (item: IAdminCustomerModel) => moment(item.createdAt).format('D-MMM-YYYY hh:mm:ss A'),
            },
            nameSelector: (item: IAdminCustomerModel) => item.name,
            buttons: {
                onEdit: (item: IAdminCustomerModel) => {
                    setState(item);
                    openEditModal("adminEditCustomerModal", {
                        formatTitle: "s",
                    });
                },
                onDelete: (item: IAdminCustomerModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteCustomerModal",
                        "onDeleteCustomerModalDelete",
                        {
                            formatTitle: "s",
                        }
                    );
                },
            },
        };

        return {
            isData: !!data && data.length > 0,
            isLoading,
            isError,
            tableContent,
            onRefresh: query,
        };
    };
