import { useState } from "react"

const PosImmediateDiscountComponent: React.FC<{}> = () => {
    const [discountAmount, setDiscountAmount] = useState("0")
    const [discountRatio, setDiscountRatio] = useState("0")

    const dummyTotalPay = 1000

    const onChangeDiscountAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseFloat(e.target.value) > dummyTotalPay) {
            setDiscountAmount(dummyTotalPay.toString())
            setDiscountRatio("100")
            return
        }

        if ((parseFloat(e.target.value) <= 0 && !(e.target.value.includes("."))) || e.target.value === "") {
            setDiscountAmount("0")
            setDiscountRatio("0")
            return
        }

        if ((e.target.value)[0] === "0") {
            setDiscountAmount(e.target.value.slice(1))
            setDiscountRatio(((parseFloat(e.target.value.slice(1)) / dummyTotalPay) * 100).toString())
            return
        }

        setDiscountAmount(e.target.value)
        setDiscountRatio(((parseFloat(e.target.value) / dummyTotalPay) * 100).toString())
    }

    const onChangeDiscountRatio = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseFloat(e.target.value) > 100) {
            setDiscountAmount(dummyTotalPay.toString())
            setDiscountRatio("100")
            return
        }

        if ((parseFloat(e.target.value) <= 0 && !(e.target.value.includes("."))) || e.target.value === "") {
            setDiscountAmount("0")
            setDiscountRatio("0")
            return
        }

        if ((e.target.value)[0] === "0") {
            setDiscountAmount((dummyTotalPay * (parseFloat(e.target.value.slice(1)) / 100)).toString())
            setDiscountRatio(e.target.value.slice(1))
            return
        }

        setDiscountAmount((dummyTotalPay * (parseFloat(e.target.value) / 100)).toString())
        setDiscountRatio(e.target.value)
    }

    return <>
        <div className='divider m-0 mb-5'></div>
        <div className='flex gap-5 items-center mb-3'>
            <div className='flex-1'>
                <label className='text-md'>Discount Amount</label>
                <div className='relative my-2'>
                    <input
                        type='number'
                        className='input input-bordered w-full'
                        placeholder='0'
                        value={discountAmount}
                        onChange={onChangeDiscountAmount}
                    />
                    <span className='absolute transform -translate-y-1/2 top-1/2 right-3'>Rs</span>
                </div>
            </div>
            <i className="fi fi-rr-exchange h-min mt-5"></i>
            <div className='flex-1'>
                <label className='text-md'>Discount Ratio</label>
                <div className='relative my-2'>
                    <input
                        type='number'
                        className='input input-bordered w-full'
                        placeholder='0'
                        value={discountRatio}
                        onChange={onChangeDiscountRatio}
                    />
                    <span className='absolute transform -translate-y-1/2 top-1/2 right-3'>%</span>
                </div>
            </div>
        </div>
        <button
            className='btn btn-primary w-full btn-info text-white bg-cyan-500 flex justify-between'
        >
            <span>Total Pay</span>
            <span>
                {`Rs. ${dummyTotalPay - parseFloat(discountAmount)}`}
            </span>
        </button>
    </>
}

export default PosImmediateDiscountComponent