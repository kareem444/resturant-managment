import { FC, useState } from 'react'

export interface DropDownComponentItemProps {
    text: string
    onClick?: () => void
}

interface DropDownComponentProps {
    placeHolder?: string
    containerClassName?: string
    inputClassName?: string
    listClassName?: string
    items?: DropDownComponentItemProps[]
}

const DropDownComponent: FC<DropDownComponentProps> = ({
    placeHolder,
    items,
    inputClassName,
    containerClassName,
    listClassName
}) => {
    const [selected, setSelected] = useState(placeHolder)
    const [isVisible, setIsVisible] = useState("hover:invisible")

    const handleItemClick = (item: DropDownComponentItemProps) => {
        setIsVisible(() => "hover:invisible")
        setSelected(item.text)
        if (item.onClick) {
            item.onClick()
        }
    }

    return (
        <div className={'dropdown w-1/3' + " " + containerClassName}>
            <div
                tabIndex={0}
                onClick={() => setIsVisible(() => "hover:visible")}
                role='button'
                className={
                    'p-2 rounded-lg bg-white w-full border-slate-400 border text-slate-400 flex flex-row justify-between items-center' +
                    ' ' +
                    inputClassName
                }
            >
                <span>{selected}</span>
                <i className='fi fi-ss-angle-small-down h-4' />
            </div>
            {!!items && (
                <ul
                    className={
                        'dropdown-content z-[1] p-2 shadow bg-base-100 rounded-xl no-scrollbar w-full overflow-y-scroll max-h-40' +
                        ` ${isVisible} ` +
                        listClassName
                    }
                >
                    {items.map((item, index) => (
                        <li
                            onClick={() => handleItemClick(item)}
                            key={index}
                            className='p-3 cursor-pointer hover:bg-base-200 rounded-md'
                        >
                            <a>{item.text}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDownComponent
