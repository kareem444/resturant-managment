import PosHeaderFeature from "./features/PosHeaderFeature"
import PosOrderFeature from "./features/PosOrderFeature"
import PosProductsFeature from "./features/PosProductsFeature"

export default function PosHomePage() {
    return (
        <div className="ml-4 flex h-screen">
            <div className="w-full sm:w-3/5 md:w-7/12 lg:w-8/12 pr-2">
                <div className="my-4">
                    <PosHeaderFeature />
                </div>
                <div className="overflow-y-scroll h-5/6 no-scrollbar">
                    <PosProductsFeature />
                </div>
            </div>
            <div className="hidden sm:block sm:w-2/5 md:w-5/12 lg:w-4/12 py-4 px-2">
                <PosOrderFeature />
            </div>
        </div>
    )
}
