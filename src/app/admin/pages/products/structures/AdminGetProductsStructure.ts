import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { AdminProductsTableHeaderConstants } from "../constants/AdminProductsTableConstants";
import { AdminProductsRepo } from "../repo/AdminProductsRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import useScreenSize from "src/common/hooks/useScreenSize";
import useProductUiReducer from "../redux/ui/useProductUiReducer";

const AdminGetProductsStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);
    const { isSm } = useScreenSize();
    const { updateProduct } = useProductUiReducer();

    const { data, isLoading, isError, query } = useFetch<IAdminProductsModel[]>({
        key: AsyncStateConstants.products,
        queryFn: AdminProductsRepo.getProducts,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminProductsTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminProductsModel) => item.branch?.name,
            2: (item: IAdminProductsModel) => item.group?.name,
            3: (item: IAdminProductsModel) => item.code,
            4: (item: IAdminProductsModel) => item.productType,
            5: (item: IAdminProductsModel) => item.price,
        },
        nameSelector: (item: IAdminProductsModel) => item.name,
        avatarSelector: (item: IAdminProductsModel) => item.image,
        buttons: {
            onEdit: isSm
                ? undefined
                : (item: IAdminProductsModel) => {
                    setState(item);
                    updateProduct({
                        productType: item.productType,
                        data: {
                            productSizes: item.sizes,
                            productTaxes: item.taxes,
                            productAdditions: item.additions,
                        },
                    });
                    openEditModal("adminEditProductModal", {
                        size: "5xl",
                        onClose: "onProductModalClose",
                    });
                },
            onDelete: (item: IAdminProductsModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteProductModal",
                    "onDeleteProductModalDelete",
                    { onClose: "onProductModalClose" }
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
