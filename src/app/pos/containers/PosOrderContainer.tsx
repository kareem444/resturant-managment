import PosOrderControlButtonsComponent from "../components/order/PosOrderControlButtonsComponent";
import PosOrderItemsComponents from "../components/order/PosOrderItemsComponent";
import PosOrderSubmitButtonComponent from "../components/order/PosOrderSubmitButtonComponent";
import PosOrderTopButtonsComponent from "../components/order/PosOrderTopButtonsComponent";
import PosOrderTotalPayComponent from "../components/order/PosOrderTotalPayComponent";

const PosOrderContainer = () => {
    return (
        <div className='card bg-white h-full p-4 grid grid-rows-6 pb-8'>
            <div className='row-span-4'>
                <PosOrderTopButtonsComponent />
                <div className='overflow-y-scroll no-scrollbar w-full h-5/6'>
                    <PosOrderItemsComponents />
                </div>
            </div>
            <div className='w-full flex flex-col row-span-3 mt-auto'>
                <PosOrderControlButtonsComponent />
                <PosOrderTotalPayComponent />
                <PosOrderSubmitButtonComponent />
            </div>
        </div>
    )
};

export default PosOrderContainer;
