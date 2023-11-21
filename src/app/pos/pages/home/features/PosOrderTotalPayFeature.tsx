import React from 'react'

export default function PosOrderTotalPayFeature() {
    return (
        <div className='card bg-base-200 w-full my-2'>
            <div className='card-body p-3'>
                <div className='flex justify-between'>
                    <span className=''>Total</span>
                    <span className=''>0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Discount</span>
                    <span className=''>0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Tax</span>
                    <span className=''>0.00</span>
                </div>
                <div className='divider m-0'></div>
                <div className='flex justify-between font-bold'>
                    <span className=''>Total Pay</span>
                    <span className=''>0.00</span>
                </div>
            </div>
        </div>
    )
}
