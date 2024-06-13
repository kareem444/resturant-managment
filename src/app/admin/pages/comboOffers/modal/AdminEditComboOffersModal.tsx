import FormComponent from "src/common/components/FormComponent";
import { AdminEditComboOffersStructure } from "../structures/AdminEditComboOffersStructure";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";
import AdminComboOfferSideBordersSlice from "../slices/AdminComboOfferSideBordersSlice";
import AdminAddComboOfferProductSlice from "../slices/AdminAddComboOfferProductSlice";
import { IComboOfferProduct } from "../interfaces/AdminComboOffersInterface";

const AdminEditComboOfferModal = () => {
    const { addComboOfferProduct: addComboOfferProductToAdd } = useComboOfferUiReducer()

    return (
        <div className="flex gap-10">
            <FormComponent
                {...AdminEditComboOffersStructure()}
                child={
                    <AdminAddComboOfferProductSlice
                        onSubmit={(val: IComboOfferProduct) => addComboOfferProductToAdd(val)}
                    />
                }
            />
            <div className='w-1/4 flex flex-col gap-5 max-h-[426px]'>
                <AdminComboOfferSideBordersSlice />
            </div>
        </div>
    );
};

export default AdminEditComboOfferModal;
