import { FC } from "react";
import usePosActions from "../../../redux/usePosReduxActions";
import { IPosProductOrCombo } from "../../../interfaces";

interface IPosProductOrComboButtonComponentProps {
    showProductOrCombo: IPosProductOrCombo;
}

const PosProductOrComboButtonComponent: FC<
    IPosProductOrComboButtonComponentProps
> = ({ showProductOrCombo }) => {
    const { setApp } = usePosActions();
    return (
        <div
            className="col-span-2 bg-base-100 rounded-2xl shadow-sm cursor-pointer group flex justify-center items-center"
            onClick={() =>
                setApp({
                    showProductOrCombo:
                        showProductOrCombo === "product" ? "combo" : "product",
                })
            }
        >
            <i
                className={
                    "fi fi-ss-hamburger-soda text-3xl group-hover:scale-105 group-active:scale-95" +
                    " " +
                    (showProductOrCombo === "combo" ? "text-cyan-500" : "text-inherit")
                }
            ></i>
        </div>
    );
};

export default PosProductOrComboButtonComponent;
