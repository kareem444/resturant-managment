import PosProductsHeaderFeature from "./features/PosProductsHeaderFeature"
import PosProductsFeature from "./features/PosProductsFeature"

export default function PosProductsPage() {
    return (
        <>
            <div className="my-4">
                <PosProductsHeaderFeature />
            </div>
            <div className="overflow-y-scroll h-5/6 no-scrollbar">
                <PosProductsFeature />
            </div>
        </>
    )
}
