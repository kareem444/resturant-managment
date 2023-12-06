import { useState } from 'react'
import PosPrinterSettingItemComponent from './PosPrinterSettingItemComponent'

const PosPrintersComponent = () => {
    const [newPrinterSettingsItemsCount, setNewPrinterSettingsItemsCount] = useState(0)

    return (
        <>
            <PosPrinterSettingItemComponent onTrash={() => { }} onLink={() => { }} />
            {Array.from(Array(newPrinterSettingsItemsCount)).map((_, index) => (
                <PosPrinterSettingItemComponent
                    key={index}
                    onTrash={() => {
                        setNewPrinterSettingsItemsCount(prev => prev - 1)
                    }}
                />
            ))}
            <div className='divider my-2 mt-5'></div>
            <div className='flex justify-end'>
                <button
                    className='bg-cyan-500 text-white rounded-3xl px-4 py-2 hover:bg-cyan-600 w-1/3 flex justify-center items-center gap-2'
                    onClick={() => setNewPrinterSettingsItemsCount(prev => prev + 1)}
                >
                    <i className='fi fi-rr-plus text-xs' />
                    <span>Add Printer</span>
                </button>
            </div>
        </>
    )
}

export default PosPrintersComponent
