import { useCallback, useState } from 'react'

enum DiscountType {
    PERCENTAGE = 'percentage',
    AMOUNT = 'amount'
}

const dummyData = [
    {
        title: 'First Discount',
        discount: '50',
        type: DiscountType.PERCENTAGE
    },
    {
        title: 'Second Discount',
        discount: '10',
        type: DiscountType.AMOUNT
    },
    {
        title: 'Third Discount',
        discount: '20',
        type: DiscountType.PERCENTAGE
    },
    {
        title: 'Fourth Discount',
        discount: '30',
        type: DiscountType.AMOUNT
    },
    {
        title: 'Fifth Discount',
        discount: '40',
        type: DiscountType.PERCENTAGE
    },
    {
        title: 'Sixth Discount',
        discount: '50',
        type: DiscountType.AMOUNT
    },
    {
        title: 'Seventh Discount',
        discount: '60',
        type: DiscountType.PERCENTAGE
    },
    {
        title: 'Eighth Discount',
        discount: '70',
        type: DiscountType.AMOUNT
    },
    {
        title: 'Ninth Discount',
        discount: '80',
        type: DiscountType.PERCENTAGE
    },
    {
        title: 'Tenth Discount',
        discount: '90',
        type: DiscountType.AMOUNT
    }
]

const dummyTotalPay = 1000

const PosPreDeterminedDiscountComponent: React.FC<{}> = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [selectedItem, setSelectedItem] = useState<any>()

    const disCountAmountResult = useCallback(() => {
        if (!selectedItem) {
            return dummyTotalPay
        }

        if (selectedItem.type === DiscountType.PERCENTAGE) {
            const discountAmount = (dummyTotalPay * selectedItem.discount) / 100
            return dummyTotalPay - discountAmount
        }

        return dummyTotalPay - selectedItem.discount
    }, [selectedItem])

    const handleOnClick = (item: any, index: number) => {
        if (selectedIndex === index) {
            setSelectedItem(undefined)
            setSelectedIndex(undefined)
            return
        }

        setSelectedItem(item)
        setSelectedIndex(index)
    }

    const handleReset = () => {
        setSelectedItem(undefined)
        setSelectedIndex(undefined)
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-2'>
                {dummyData.map((item, index) => {
                    const isSelected = selectedIndex === index
                    return (
                        <button
                            key={index}
                            className={
                                'btn btn-ghost text-slate-500 capitalize flex justify-between border border-slate-200' +
                                ' ' +
                                (isSelected ? '!border-cyan-500 !text-cyan-500' : '')
                            }
                            onClick={() => {
                                handleOnClick(item, index)
                            }}
                        >
                            <span className='ml-2'>{item.title}</span>
                            <span>
                                {item.type === DiscountType.AMOUNT && <span>Rs. </span>}
                                <span>{item.discount}</span>
                                {item.type === DiscountType.PERCENTAGE && <span> %</span>}
                            </span>
                        </button>
                    )
                })}
            </div>
            <div className='flex gap-2 flex-col sm:flex-row mt-5'>
                <button className='btn btn-primary flex-1 btn-info text-white bg-cyan-500 flex justify-between'>
                    <span>Total Pay</span>
                    <span>{`Rs. ${disCountAmountResult()}`}</span>
                </button>
            </div>
        </>
    )
}

export default PosPreDeterminedDiscountComponent
