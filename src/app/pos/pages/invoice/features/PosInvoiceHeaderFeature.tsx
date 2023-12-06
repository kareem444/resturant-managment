import { ReactComponent as BusyIcon } from '../../../../../common/assets/svg/busy.svg'
import { ReactComponent as CheckIcon } from '../../../../../common/assets/svg/check.svg'
import Datepicker from 'react-tailwindcss-datepicker';

const PosInvoiceHeaderFeature = () => {
  return (
    <div className='card bg-white p-2 px-3 flex-row justify-between'>
      <Datepicker
        onChange={
          (newValue) => {
            console.log("datepickerValue:", newValue);
          }
        }
        containerClassName=""
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
      <div className='w-1/3 flex flex-row justify-end'>
        <div className='btn btn-ghost'>
          <BusyIcon className='h-12 w-9' fill='rgb(100, 116, 139)' />
        </div>
        <div className='btn btn-ghost'>
          <CheckIcon className='h-12 w-9' fill='#06b6d4' />
        </div>
      </div>
    </div>
  )
};

export default PosInvoiceHeaderFeature;
