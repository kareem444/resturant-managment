import { RECENT_TRANSACTIONS } from "src/unUsed/utils/dummyData";

export default function PosProductsFeature() {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                RECENT_TRANSACTIONS.map((item, index) => (
                    <div className="card bg-white shadow-xl cursor-pointer" key={index}>
                        <figure className="p-3">
                            <img src={item.avatar} alt="Shoes" className="w-full " />
                        </figure>
                        <div className="card-body flex-row justify-between p-4">
                            <span>{item.name}</span>
                            <span className="font-bold">Rp. 24.244</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
