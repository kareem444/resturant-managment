import PosProductsHeaderFeature from "./features/PosProductsHeaderFeature";
import PosProductsFeature from "./features/PosProductsFeature";
import { useAppSelector } from "src/common/redux/store";
import { productsPageState } from "../../redux/PosReduxSelectors";

export default function PosProductsPage() {
    const state = useAppSelector(productsPageState);

    return (
        <>
            <div className="my-3">
                <PosProductsHeaderFeature showProductOrCombo={state.showProductOrCombo} />
            </div>
            <div className="overflow-y-scroll flex-1 no-scrollbar">
                <PosProductsFeature />
            </div>
        </>
    );
}
