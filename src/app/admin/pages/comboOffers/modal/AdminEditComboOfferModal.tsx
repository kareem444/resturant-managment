import FormComponent from 'src/common/components/FormComponent'
import { AdminEditComboOfferModalFormStructure } from '../structure/AdminEditComboOfferStructure'
import AdminComboOfferSideBordersSlice from '../slices/AdminComboOfferSideBordersSlice'
import AdminAddComboOfferProductSlice from '../slices/AdminAddComboOfferProductSlice'
import { IComboOfferProduct } from '../interfaces/AdminComboOfferInterface'
import useComboOfferUiReducer from '../redux/ui/useComboOfferUiReducer'

const AdminEditComboOfferModal = () => {
    const { addComboOfferProductToEdit } = useComboOfferUiReducer()

    return (
        <>
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminEditComboOfferModalFormStructure()}
                    child={
                        <AdminAddComboOfferProductSlice
                            onSubmit={(val: IComboOfferProduct) =>
                                addComboOfferProductToEdit(val)
                            }
                        />
                    }
                />
                <div className='w-1/4 flex flex-col gap-5'>
                    <AdminComboOfferSideBordersSlice isEditModal={true} />
                </div>
            </div>
        </>
    )
}

export default AdminEditComboOfferModal
