import { FC, memo } from "react";
import LogoComponent from "src/common/components/LogoComponent";
import { IPosLoadingText } from "../interfaces";

interface IPosLoadingComponentProps {
    show?: boolean;
    loadingText?: IPosLoadingText;
}

const PosLoadingComponent: FC<IPosLoadingComponentProps> = ({
    show = false,
    loadingText,
}) => {
    return (
        <div
            className="h-screen w-screen fixed z-50 justify-center items-center"
            style={{ display: show ? "flex" : "none" }}
        >
            <div className="bg-gray-900 opacity-50 h-screen w-screen"></div>
            <div className="fixed text-center">
                <div className="grounded-radiants">
                    <LogoComponent className="w-28 animate-h_spin" />
                </div>
                {loadingText?.show && (
                    <div className="text-white">
                        <h1 className="flex gap-1 justify-center">
                            <span className="flex">
                                <span>{loadingText.text}</span>
                                {loadingText.showDots && (
                                    <span className="flex">
                                        <div className="animate-bounce [animation-delay:-0.3s]">
                                            .
                                        </div>
                                        <div className="animate-bounce [animation-delay:-0.15s]">
                                            .
                                        </div>
                                        <div className="animate-bounce">
                                            .
                                        </div>
                                    </span>
                                )}
                            </span>
                            {!!(loadingText.percent !== undefined) && (
                                <span>({loadingText.percent}%)</span>
                            )}
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(PosLoadingComponent);
