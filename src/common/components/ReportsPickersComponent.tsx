import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrinterIcon from '@heroicons/react/24/outline/PrinterIcon';
import React from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

export const ReportsPickersComponent: React.FC<{}> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 card bg-base-100 shadow-xl">
            <div className="">
                <Datepicker
                    onChange={
                        (newValue) => {
                            console.log("datepickerValue:", newValue);
                        }
                    }
                    containerClassName=" "
                    value={{
                        startDate: new Date(),
                        endDate: new Date()
                    }}
                    inputClassName="input input-bordered w-72"
                    toggleClassName="invisible"
                    // onChange={handleDatePickerValueChange} 
                    showShortcuts={true}
                    primaryColor={"white"}
                />
            </div>
            <div className="flex items-start justify-end">
                <button className='btn btn-square btn-ghost'>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                </button>
                <button className='btn btn-square btn-ghost'>
                    <FontAwesomeIcon icon={faFilePdf} className="text-2xl" />
                </button>
                <button className='btn btn-square btn-ghost'>
                    <PrinterIcon className='w-8 h-10' />
                </button>
            </div>
        </div>
    )
}