import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import usePosActions from "src/app/pos/redux/usePosReduxActions";
import { FC, memo } from "react";
import { IPosProductOrCombo } from "src/app/pos/interfaces";
import PosProductOrComboButtonComponent from "../components/PosProductOrComboButtonComponent";

const DemoNames = [
    "pizza",
    "burger",
    "pasta",
    "salad",
    "sushi",
    "steak",
    "fish",
    "chicken",
    "dessert",
];

interface IPosProductsHeaderFeatureProps {
    showProductOrCombo: IPosProductOrCombo;
}

const PosProductsHeaderFeature: FC<IPosProductsHeaderFeatureProps> = ({
    showProductOrCombo,
}) => {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="p-2 flex bg-base-100 rounded-2xl shadow-sm col-span-10">
                <div className="text-center py-2 bg-cyan-500 rounded-2xl w-2/12 hover:scale-105">
                    <div className="text-lg text-white cursor-pointer">All</div>
                </div>
                <div className="divider divider-horizontal mx-2"></div>
                <Swiper
                    spaceBetween={10}
                    className=""
                    slidesPerView={DemoNames.length > 4 ? 4 : DemoNames.length}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => { }}
                >
                    {DemoNames.map((name, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="bg-cyan-500 rounded-2xl cursor-pointer hover:scale-105"
                            >
                                <div className="text-lg text-center py-2 text-white">
                                    {name.length < 15 ? name : name.slice(0, 15) + ".."}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <PosProductOrComboButtonComponent
                showProductOrCombo={showProductOrCombo}
            />
        </div>
    );
};

export default memo(PosProductsHeaderFeature);
