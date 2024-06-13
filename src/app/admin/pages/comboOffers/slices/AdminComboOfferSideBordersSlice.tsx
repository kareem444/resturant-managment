import AdminItemsBoxComponent from "src/app/admin/components/AdminItemsBoxComponent";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";
import { FC } from "react";
import { IComboOfferProduct } from "../interfaces/AdminComboOffersInterface";

interface IProps {
    isEditModal?: boolean;
}

const AdminComboOfferSideBordersSlice: FC<IProps> = () => {
    const { state, removeComboOfferProduct, resetComboOfferProducts } =
        useComboOfferUiReducer();

    return (
        <>
            <AdminItemsBoxComponent
                title="Product"
                items={state.data}
                selector={(item: IComboOfferProduct) =>
                    (item.product ? `${item.product?.name} ` : `Deleted `) +
                    (item.size ? `- ${item.size}` : "") +
                    ` - Rs.${item.price}`
                }
                onDeleteAll={() => resetComboOfferProducts()}
                onDeleteItem={(_, index) => removeComboOfferProduct(index)}
                disabled={(item: IComboOfferProduct) => !item.product}
            />
        </>
    );
};

export default AdminComboOfferSideBordersSlice;
