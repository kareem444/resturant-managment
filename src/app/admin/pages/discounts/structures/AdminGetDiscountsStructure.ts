import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { AdminDiscountTableHeaderConstants } from "../constants/AdminDiscountsTableConstants";
import { AdminDiscountsRepo } from "../repo/AdminDiscountsRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import useScreenSize from "src/common/hooks/useScreenSize";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";

const AdminGetProductsStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);
    const { isSm } = useScreenSize();
    const { setDiscountUiState } = useDiscountUiReducer();

    const { data, isLoading, isError, query } = useFetch<IAdminDiscountModel[]>({
        key: AsyncStateConstants.discounts,
        queryFn: AdminDiscountsRepo.getDiscounts,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminDiscountTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminDiscountModel) => item.branch?.name,
            2: (item: IAdminDiscountModel) => item.amount,
            3: (item: IAdminDiscountModel) => item.discountType,
            4: (item: IAdminDiscountModel) => item.availableDiscounts,
        },
        nameSelector: (item: IAdminDiscountModel) => item.name,
        buttons: {
            onEdit: isSm
                ? undefined
                : (item: IAdminDiscountModel) => {
                    setState(item);
                    setDiscountUiState({
                        applyTo: item.applyTo,
                        customers: item.customers,
                        products: item.products,
                    });
                    openEditModal("adminEditDiscountModal", {
                        size: "5xl",
                        onClose: "onDiscountModalClose",
                    });
                },
            onDelete: (item: IAdminDiscountModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteDiscountModal",
                    "onDeleteDiscountsModalDelete",
                    { onClose: "onDiscountModalClose" }
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

export default AdminGetProductsStructure;
