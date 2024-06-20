import FormComponent from "src/common/components/FormComponent";
import { AdminAddComboOffersStructure } from "../structures/AdminAddComboOffersStructure";
import useComboOfferUiReducer from "../redux/useComboOfferUiReducer";
import AdminComboOfferSideBordersSlice from "../slices/AdminComboOfferSideBordersSlice";
import AdminAddComboOfferProductSlice from "../slices/AdminAddComboOfferProductSlice";
import { IComboOfferProduct } from "../interfaces/AdminComboOffersInterface";

const AdminAddComboOffersModal = () => {
    const { addComboOfferProduct } = useComboOfferUiReducer()

    return (
        <div className="flex gap-10">
            <FormComponent
                {...AdminAddComboOffersStructure()}
                child={
                    <AdminAddComboOfferProductSlice
                        onSubmit={(val: IComboOfferProduct) => addComboOfferProduct(val)}
                    />
                }
            />
            <div className='w-1/4 flex flex-col gap-5 max-h-[634px]'>
                <AdminComboOfferSideBordersSlice />
            </div>
        </div>
    );
};

export default AdminAddComboOffersModal;
