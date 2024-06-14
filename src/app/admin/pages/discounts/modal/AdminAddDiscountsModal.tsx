import FormComponent from "src/common/components/FormComponent";
import { AdminAddDiscountsStructure } from "../structures/AdminAddDiscountsStructure";
import useDiscountUiReducer from "../redux/useDiscountUiReducer";
import AdminDiscountSideBordersSlice from "../slices/AdminDiscountSideBordersSlice";

const AdminAddDiscountsModal = () => {
    const { state } = useDiscountUiReducer();

    const showSideBorders = state.applyTo !== undefined && state.applyTo !== 'order';

    return (
        <div className="flex gap-10">
            <FormComponent
                {...AdminAddDiscountsStructure()}
            />
            {!!showSideBorders && (
                <div className="w-1/4 flex flex-col gap-5">
                    <AdminDiscountSideBordersSlice />
                </div>
            )}
        </div>
    );
};

export default AdminAddDiscountsModal;
