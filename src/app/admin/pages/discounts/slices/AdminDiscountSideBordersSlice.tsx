import AdminItemsBoxComponent from "src/app/admin/components/AdminItemsBoxComponent";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";

export default function AdminDiscountSideBordersSlice() {
    const {
        state,
        removeAllDiscountProducts,
        removeDiscountProduct,
        removeAllDiscountCustomers,
        removeDiscountCustomer,
    } = useDiscountUiReducer();

    const showProductBorder = state.applyTo?.includes("product");
    const showCustomerBorder = state.applyTo?.includes("customer");

    return (
        <>
            {!!showProductBorder && (
                <AdminItemsBoxComponent
                    title="Products"
                    items={state.products || []}
                    selector={(item: { id: string; name: string }) => `${item.name}`}
                    onDeleteAll={() => removeAllDiscountProducts()}
                    onDeleteItem={(item: any, index) => removeDiscountProduct({ index })}
                />
            )}

            {!!showCustomerBorder && (
                <AdminItemsBoxComponent
                    title="Customers"
                    items={state.customers || []}
                    selector={(item: { id: string; name: string }) => `${item.name}`}
                    onDeleteAll={() => removeAllDiscountCustomers()}
                    onDeleteItem={(item: any, index) => removeDiscountCustomer({ index })}
                />
            )}
        </>
    );
}
