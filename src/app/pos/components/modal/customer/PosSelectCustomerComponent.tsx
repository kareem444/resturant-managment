import { useCallback, useState } from 'react'
import useModalReducer from 'src/common/redux/modal/useModalReducer'

interface Props {
    dummyCustomersData: {
        name: string
        mobile: string
        taxNumber: string
        discountAmount: string
    }[]
    dummyTotalPay: number
    setAccordionNumber?: React.Dispatch<React.SetStateAction<number>>
    setSelectedCustomer?: React.Dispatch<React.SetStateAction<any>>
    setSearchedMobileNumber?: React.Dispatch<React.SetStateAction<string>>
}

const PosSelectCustomerComponent: React.FC<Props> = ({
    dummyCustomersData,
    dummyTotalPay,
    setAccordionNumber,
    setSelectedCustomer,
    setSearchedMobileNumber
}) => {
    const [selectedItem, setSelectedItem] = useState<any>()
    const [selectedIndex, setSelectedIndex] = useState<number>()
    const [searchedNumber, setSearchedNumber] = useState('')

    const { closeModal } = useModalReducer()

    const handelOnSelect = (index: number, item: any) => {
        if (selectedIndex === index) {
            setSelectedIndex(undefined)
            setSelectedItem(undefined)
            setSelectedCustomer?.(undefined)
            return
        }
        setSelectedItem(item)
        setSelectedIndex(index)
        setSelectedCustomer?.(item)
    }

    const handelOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (isNaN(Number(value))) return
        setSearchedNumber(value)
    }

    const handelOnNewCustomer = () => {
        setAccordionNumber?.(2)
        setSearchedMobileNumber?.(searchedNumber)
    }

    const handelOTotalPay = useCallback(() => {
        if (selectedItem) {
            const totalPay = dummyTotalPay - selectedItem.discountAmount
            return totalPay
        }

        return dummyTotalPay
    }, [dummyTotalPay, selectedItem])

    return (
        <>
            <div className='divider my-0 mb-4'></div>
            <div className='flex justify-between mb-4 gap-3'>
                <input
                    type='number'
                    className='input input-bordered flex-1'
                    placeholder='Search With Mobile'
                    value={searchedNumber}
                    onChange={handelOnSearch}
                />
                <button
                    className='btn btn-primary btn-info text-white bg-cyan-500 flex-grow-0 w-1/5'
                    onClick={handelOnNewCustomer}
                >
                    <i className='fi fi-br-plus'></i>
                </button>
            </div>
            <div className='max-h-52 overflow-y-scroll no-scrollbar'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Mobile</td>
                            <td>Tax Number</td>
                            <td>Discount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyCustomersData.map((customer, index) => {
                            const isSelected = index === selectedIndex
                            const discountAmount = customer.discountAmount.includes('.')
                                ? '0' + customer.discountAmount
                                : customer.discountAmount
                            return (
                                <tr
                                    key={index}
                                    className={
                                        'cursor-pointer hover' +
                                        ' ' +
                                        (isSelected && 'text-cyan-500')
                                    }
                                    onClick={() => handelOnSelect(index, customer)}
                                >
                                    <td>{customer.name}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.taxNumber}</td>
                                    <td>Rs. {discountAmount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='divider my-1'></div>
            <div className='flex gap-4'>
                <button
                    className='btn flex-1 btn-ghost hover:bg-red-800 text-white bg-red-900  w-full'
                    onClick={closeModal}
                >
                    Ok
                </button>
                <button className='btn flex-1 btn-info text-white bg-cyan-500 flex justify-between w-full'>
                    <span>Total Pay</span>
                    <span>{`Rs. ${handelOTotalPay()}`}</span>
                </button>
            </div>
        </>
    )
}

export default PosSelectCustomerComponent
