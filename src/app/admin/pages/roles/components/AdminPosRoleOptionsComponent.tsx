import { FC, useEffect, useState } from 'react'
import CheckBoxComponent from 'src/common/components/CheckBoxComponent'

interface AdminRoleOptionsComponentProps {
    onResult?: (result: any) => void
}

const AdminPosRoleOptionsComponent: FC<AdminRoleOptionsComponentProps> = ({
    onResult
}) => {
    const [result, setResult] = useState({
        addCustomer: false,
        applyDiscount: false,
        viewInvoices: false,
        salesReturn: false
    })

    useEffect(() => {
        if (onResult) {
            onResult(result)
        }
    }, [result])

    return (
        <div className={`grid grid-cols-2 md:grid-cols-4`}>
            <CheckBoxComponent
                label='Add Customer'
                className='md:m-auto'
                onChange={val => {
                    setResult({
                        ...result,
                        addCustomer: val
                    })
                }}
                checked={result.addCustomer}
            />
            <CheckBoxComponent
                label='Apply Discount'
                className='md:m-auto'
                onChange={val => {
                    setResult({
                        ...result,
                        applyDiscount: val
                    })
                }}
                checked={result.applyDiscount}
            />
            <CheckBoxComponent
                label='View Invoices'
                className='md:m-auto'
                onChange={val => {
                    setResult({
                        ...result,
                        viewInvoices: val
                    })
                }}
                checked={result.viewInvoices}
            />
            <CheckBoxComponent
                label='Sales Return'
                className='md:m-auto'
                onChange={val => {
                    setResult({
                        ...result,
                        salesReturn: val
                    })
                }}
            />
        </div>
    )
}

export default AdminPosRoleOptionsComponent
