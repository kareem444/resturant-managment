import PosProductsHeaderFeature from "./features/PosProductsHeaderFeature"
import PosProductsFeature from "./features/PosProductsFeature"

export default function PosProductsPage() {
    return (
        <>
            <div className="my-3">
                <PosProductsHeaderFeature />
            </div>
            <div className="overflow-y-scroll flex-1 no-scrollbar">
                <PosProductsFeature />
            </div>
        </>
    )
}
