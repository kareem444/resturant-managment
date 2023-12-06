import { FC } from 'react'
import PosIconButtonComponent from 'src/app/pos/components/PosIconButtonComponent'
import DropDownComponent, {
    DropDownComponentItemProps
} from 'src/common/components/DropDownComponent'

interface PosPrinterSettingItemComponentProps {
    className?: string
    onLink?: () => void
    onTrash?: () => void
}


const printersItems: DropDownComponentItemProps[] = [
    {
        text: 'Printer 1',
    },
    {
        text: 'Printer 2',
    },
    {
        text: 'Printer 3',
    },
]

const categoriesItem: DropDownComponentItemProps[] = [
    {
        text: 'Category 1',
    },
    {
        text: 'Category 2',
    }
]

const PosPrinterSettingItemComponent: FC<
    PosPrinterSettingItemComponentProps
> = ({ onLink, onTrash, className }) => {
    return (
        <div className={'flex justify-between items-center mb-3' + ' ' + className}>
            <DropDownComponent
                placeHolder='Choose Printer'
                // inputClassName='rounded-3xl'
                listClassName='!max-h-24'
                items={printersItems}
            />
            {
                !!onLink &&
                <PosIconButtonComponent
                    icon='fi-br-link-slash-alt'
                    onClick={() => onLink()}
                    iconClassName='text-slate-500 hover:bg-transparent block w-auto h-auto active:text-cyan-500'
                />
            }
            {
                !!onTrash &&
                <PosIconButtonComponent
                    icon='fi-sr-trash'
                    onClick={() => onTrash()}
                    iconClassName='text-slate-500 hover:bg-transparent block w-auto h-auto active:text-red-900'
                />
            }
            <DropDownComponent
                placeHolder='Choose Category'
                // inputClassName='rounded-3xl'
                listClassName='!max-h-24'
                items={categoriesItem}
            />
        </div>
    )
}

export default PosPrinterSettingItemComponent
