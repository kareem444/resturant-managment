import { useState } from 'react'
import AccordionComponent from 'src/common/components/AccordionComponent'
import PosSelectCustomerComponent from './PosSelectCustomerComponent'
import PosNewCustomerComponent from './PosNewCustomerComponent'

const dummyCustomersData = [
    {
        name: 'Ahmed Ali',
        mobile: '1234567890',
        taxNumber: '1234567890',
        discountAmount: '200'
    },
    {
        name: 'Mohamed',
        mobile: '454785775',
        taxNumber: '548578786',
        discountAmount: '450'
    },
    {
        name: 'Ahmed Ali',
        mobile: '1234567890',
        taxNumber: '1234567890',
        discountAmount: '.50'
    },
    {
        name: 'Mohamed',
        mobile: '454785775',
        taxNumber: '548578786',
        discountAmount: '45'
    }
]

const dummyTotalPay = 1000

const PosCustomerModalComponent = () => {
    const [accordionNumber, setAccordionNumber] = useState(1)
    const [selectedCustomer, setSelectedCustomer] = useState<any>()
    const [searchedMobileNumber, setSearchedMobileNumber] = useState('')

    const accordionData = [
        {
            title: 'Select Customer',
            component: (
                <PosSelectCustomerComponent
                    dummyCustomersData={dummyCustomersData}
                    dummyTotalPay={dummyTotalPay}
                    setAccordionNumber={setAccordionNumber}
                    setSelectedCustomer={setSelectedCustomer}
                    setSearchedMobileNumber={setSearchedMobileNumber}
                />
            )
        },
        {
            title: 'New Customer',
            component: <PosNewCustomerComponent searchedMobileNumber={searchedMobileNumber} />
        }
    ]

    return (
        <AccordionComponent
            data={accordionData}
            className='text-slate-500'
            openSectionWithSectionNumber={accordionNumber}
            onChange={(index) => setAccordionNumber(index)}
        />
    )
}

export default PosCustomerModalComponent
