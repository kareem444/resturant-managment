import PosOrderControlButtonsComponent from "../components/order/PosOrderControlButtonsComponent";
import PosOrderItemsComponents from "../components/order/PosOrderItemsComponent";
import PosOrderSubmitButtonComponent from "../components/order/PosOrderSubmitButtonComponent";
import PosOrderTopButtonsComponent from "../components/order/PosOrderTopButtonsComponent";
import PosOrderTotalPayComponent from "../components/order/PosOrderTotalPayComponent";

const PosOrderContainer = () => {
    return (
        <div className='card bg-white h-full p-4 flex flex-col overflow-y-scroll no-scrollbar shadow-md'>
            <div className=''>
                <PosOrderTopButtonsComponent />
            </div>
            <div className='overflow-y-scroll no-scrollbar w-full flex-auto min-h-16'>
                <PosOrderItemsComponents />
            </div>
            <div className='w-full flex flex-col mt-4'>
                <PosOrderControlButtonsComponent />
                <PosOrderTotalPayComponent />
                <PosOrderSubmitButtonComponent />
            </div>
        </div>
    )
};

export default PosOrderContainer;
