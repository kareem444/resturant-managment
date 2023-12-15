import {
    ChangeEvent,
    FC,
    useEffect,
    useRef,
    useState
} from 'react'
import { ControllerRenderProps } from 'react-hook-form'

export interface DropDownSearchComponentProps {
    input?: {
        placeholder?: string
        defaultValue?: string
        className?: string
        field?: ControllerRenderProps<any, string>
    }
    icon?: {
        name?: string
        iconOnExpanded?: string
        className?: string
        position?: 'left' | 'right'
    }
    menu?: {
        isMenuFloat?: boolean
        className?: string
    }
    showIcon?: boolean
    data?: any[]
    selectors?: {
        text: string
        value: string
    }
}

interface IDropDownSearchItemProperties {
    text: string
    value: string
}

const DropDownSearchComponent: FC<DropDownSearchComponentProps> = ({
    showIcon = true,

    input = {
        placeholder: 'Search...',
        defaultValue: undefined,
        className: ''
    },

    icon = {
        name: 'fi-rs-plus',
        iconOnExpanded: 'fi-br-minus',
        position: 'right'
    },

    menu = {
        isMenuFloat: true
    },

    data,

    selectors
}) => {
    const [items, setItems] = useState<IDropDownSearchItemProperties[]>()
    const [searchedItems, setSearchedItems] =
        useState<IDropDownSearchItemProperties[]>()

    useEffect(() => {
        if (data) {
            const result = data.map(item => {
                return {
                    text: selectors ? item[selectors.text] : undefined,
                    value: selectors ? item[selectors.value] : undefined
                }
            })
            setItems(result)
            setSearchedItems(result)
        }
    }, [data])

    const [result, setResult] = useState<IDropDownSearchItemProperties>()
    const [showMenu, setShowMenu] = useState(false)

    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (timer) {
            clearTimeout(timer);
        }

        if (result) {
            setResult(undefined)
            input.field?.onChange(undefined)
        }

        timer = setTimeout(() => {
            const searchResult = items?.filter(item =>
                item.text.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setSearchedItems(searchResult)
        }, 500);
    }

    const handleOnChoose = (item: IDropDownSearchItemProperties) => {
        setResult(item)
        if (inputRef.current) {
            inputRef.current.value = item.text
        }
        if (input.field) {
            input.field?.onChange(item.value)
        }
    }

    const handleOnBluer = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setShowMenu(false)
        }, 200)
    }

    const handelICon = (): string | undefined => {
        if (showIcon) {
            if (showMenu) return icon.iconOnExpanded
            return icon.name
        }
    }

    return (
        <div className='relative'>
            <div className='relative'>
                {showIcon && (
                    <i
                        className={`fi ${handelICon()} w-4 h-4 absolute top-1/2 transform -translate-y-1/2 text-gray-600 ${icon.position
                            }-4 ${icon.className}`}
                    />
                )}
                <input
                    ref={inputRef}
                    type='text'
                    placeholder={input.placeholder}
                    defaultValue={result?.text ?? input.defaultValue ?? undefined}
                    className={`input input-bordered w-full ${input.className}`}
                    onFocus={() => setShowMenu(true)}
                    onBlur={handleOnBluer}
                    onChange={handleOnChange}
                />
            </div>
            {showMenu && (
                <ul
                    className={`max-h-32 w-full bg-base-200 shadow-md z-20 rounded-lg overflow-y-scroll no-scrollbar ${menu.isMenuFloat && 'absolute'
                        }`}
                >
                    {searchedItems?.map((item, index) => (
                        <li key={index}>
                            <div
                                className='p-2 hover:bg-base-100 cursor-pointer '
                                onClick={() => handleOnChoose(item)}
                            >
                                {item.text}
                            </div>
                            {index !== searchedItems.length - 1 && (
                                <div className='divider my-0 h-0' />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDownSearchComponent
