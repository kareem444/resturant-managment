import { ITableContent } from "../../../../../common/components/TableComponent";
import AdminModalActionsStructure from "src/app/admin/structure/modal/AdminModalActionsStructure";
import useFetch from "src/common/DataHandler/hooks/server/useFetch";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { AsyncStateConstants } from "src/common/constants/AsyncStateConstants";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { AdminComboOffersTableHeaderConstants } from "../constants/AdminComboOffersTableConstants";
import { AdminComboOffersRepo } from "../repo/AdminComboOffersRepo";
import { IAdminDetailsStatusContainerProps } from "src/app/admin/containers/AdminDetailsStatusContainer";
import useScreenSize from "src/common/hooks/useScreenSize";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";

const AdminGetComboOffersStructure = (): IAdminDetailsStatusContainerProps => {
    const { openEditModal, openDeleteModal } = AdminModalActionsStructure();
    const { setState } = useEchoState(EchoStateConstants.selectedItem);
    const { isSm } = useScreenSize();
    const { addComboOfferProduct } = useComboOfferUiReducer();

    const { data, isLoading, isError, query } = useFetch<IAdminComboOffersModel[]>({
        key: AsyncStateConstants.comboOffers,
        queryFn: AdminComboOffersRepo.getComboOffers,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: "all",
            onError: (e) => showNotification(e?.code, "error"),
        },
    });

    const tableContent: ITableContent = {
        header: AdminComboOffersTableHeaderConstants,
        items: data || [],
        maxStringLength: 15,
        selectors: {
            1: (item: IAdminComboOffersModel) => item.code,
            2: (item: IAdminComboOffersModel) => item.branch?.name,
            3: (item: IAdminComboOffersModel) => item.products.length.toString(),
        },
        nameSelector: (item: IAdminComboOffersModel) => item.name,
        avatarSelector: (item: IAdminComboOffersModel) => item.image,
        buttons: {
            onEdit: isSm
                ? undefined
                : (item: IAdminComboOffersModel) => {
                    setState(item);
                    item.products.forEach((product) => addComboOfferProduct(product));
                    openEditModal("adminEditComboOfferModal", {
                        size: "5xl",
                        onClose: "onComboOfferModalClose",
                    });
                },
            onDelete: (item: IAdminComboOffersModel) => {
                setState(item);
                openDeleteModal(
                    "adminDeleteComboOfferModal",
                    "onDeleteComboOfferModalDelete",
                    { onClose: "onComboOfferModalClose" }
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

export default AdminGetComboOffersStructure;
