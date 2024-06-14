import FormComponent from "src/common/components/FormComponent";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import AdminDiscountSideBordersSlice from "../slices/AdminDiscountSideBordersSlice";
import { AdminEditDiscountsStructure } from "../structures/AdminEditDiscountsStructure";

const AdminEditDiscountsModal = () => {
    const { state } = useDiscountUiReducer();

    const showSideBorders = state.applyTo !== undefined && state.applyTo !== 'order';

    return (
        <div className="flex gap-10">
            <FormComponent
                {...AdminEditDiscountsStructure()}
            />
            {!!showSideBorders && (
                <div className="w-1/4 flex flex-col gap-5">
                    <AdminDiscountSideBordersSlice />
                </div>
            )}
        </div>
    );
};

export default AdminEditDiscountsModal;

