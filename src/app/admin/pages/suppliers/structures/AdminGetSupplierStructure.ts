import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import { AdminSuppliersRepo } from "../repo/AdminSupplierRepo";
import { IAdminSupplierModel } from "src/app/admin/models/AdminSupplierModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminSupplierTableHeaderConstants } from "../constants/AdminSupplierTableConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import moment from "moment";

export const AdminGetSupplierStructure =
    (): IAdminDetailsStatusContainerProps => {
        const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
        const { setState } = useEchoState(EchoStateConstants.selectedItem);

        const { data, isLoading, isError, query } = useFetch<IAdminSupplierModel[]>({
            key: AsyncStateConstants.suppliers,
            queryFn: AdminSuppliersRepo.getSuppliers,
            options: {
                isExecuteOnInitIfNoData: true,
                echoState: "all",
                onError: (e) => showNotification(e?.code, "error"),
            },
        });

        const tableContent: ITableContent = {
            header: AdminSupplierTableHeaderConstants,
            items: data || [],
            selectors: {
                2: (item: IAdminSupplierModel) => item.address,
                3: (item: IAdminSupplierModel) => item.phone,
                4: (item: IAdminSupplierModel) => item.taxNumber,
                5: (item: IAdminSupplierModel) => moment(item.createdAt).format('D MMM'),
            },
            nameSelector: (item: IAdminSupplierModel) => item.name,
            buttons: {
                onEdit: (item: IAdminSupplierModel) => {
                    setState(item);
                    openEditModal("adminEditSupplierModal", {
                        formatTitle: "s",
                    });
                },
                onDelete: (item: IAdminSupplierModel) => {
                    setState(item);
                    openDeleteModal(
                        "adminDeleteSupplierModal",
                        "onDeleteSupplierModalDelete",
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
