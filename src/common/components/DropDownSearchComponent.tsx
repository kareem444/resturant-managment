import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import LoadingSpinComponent from './LoadingSpinComponent'

export interface DropDownSearchComponentProps {
    input?: {
        placeholder?: string
        defaultValue?: string
        className?: string
        field?: ControllerRenderProps<any, string>
        disabled?: boolean
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
    clearAfterSelect?: boolean
    data?: any[]
    onSelect?: (item: IDropDownSearchItemProperties, itemData?: any) => void
    selectors?: {
        text: string
        value: string
    },
    defaultSelectedValue?: any,
    isLoading?: boolean
    onInputChange?: (val: string) => void
}

export interface IDropDownSearchItemProperties {
    text: string
    value: any
}

const DropDownSearchComponent: FC<DropDownSearchComponentProps> = ({
    showIcon = true,
    input = {
        placeholder: 'Search...',
        defaultValue: undefined,
        className: '',
        disabled: false
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
    onSelect,
    selectors,
    defaultSelectedValue,
    clearAfterSelect = false,
    isLoading = false,
    onInputChange
}) => {
    const [items, setItems] = useState<IDropDownSearchItemProperties[]>()
    const [searchedItems, setSearchedItems] = useState<IDropDownSearchItemProperties[]>()

    useEffect(() => {
        if (data) {
            const convertData = data.map(item => {
                return {
                    text: selectors ? item[selectors.text] : undefined,
                    value: selectors ? item[selectors.value] : undefined
                }
            })
            setItems(convertData)
            setSearchedItems(convertData)
        }
    }, [data])

    const [selected, setSelected] = useState<IDropDownSearchItemProperties>()
    const [showMenu, setShowMenu] = useState(false)

    let timer: ReturnType<typeof setTimeout> | undefined = undefined

    const inputRef = useRef<HTMLInputElement>(null)

    const resetButton = () => {
        setSelected(undefined)
        input.field?.onChange(undefined)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (timer) {
            clearTimeout(timer)
        }

        if (selected) {
            resetButton()
        }

        if (onInputChange) {
            onInputChange(e.target.value)
        }

        timer = setTimeout(() => {
            const searchResult = items?.filter(item =>
                item.text.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setSearchedItems(searchResult)
        }, 500)
    }

    useEffect(() => {
        if (defaultSelectedValue) {
            setSelected({
                text: defaultSelectedValue[selectors!.text],
                value: defaultSelectedValue[selectors!.value]
            })
            if (input.field) {
                input.field.onChange(defaultSelectedValue[selectors!.value])
            }
        }
    }, [defaultSelectedValue])

    const handleOnChoose = (item: IDropDownSearchItemProperties) => {
        setSelected(item)
        const selectedItemData = data?.find(dataItem => dataItem[selectors!.value] === item.value)
        if (inputRef.current) {
            inputRef.current.value = item.text
        }
        if (input.field) {
            input.field?.onChange(item.value)
        }
        if (onSelect) {
            onSelect(item, selectedItemData)
        }
        if (clearAfterSelect) {
            resetButton()
            if (inputRef.current) {
                inputRef.current.value = ''
            }
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
                {(showIcon && !isLoading) && (
                    <i
                        className={
                            `fi w-4 h-4 absolute top-1/2 transform -translate-y-1/2 text-gray-600` +
                            ` ${icon.className} ` +
                            `${handelICon()}`
                        }
                        style={{
                            right: icon.position === 'right' ? '1rem' : undefined,
                            left: icon.position === 'left' ? '1rem' : undefined
                        }}
                    />
                )}
                {
                    isLoading && (
                        <LoadingSpinComponent className='!w-4 !h-4 absolute top-1/3 right-4 ' />
                    )
                }
                <input
                    ref={inputRef}
                    type='text'
                    placeholder={input.placeholder}
                    defaultValue={selected?.text ?? input.defaultValue ?? undefined}
                    className={`input input-bordered w-full ${input.className}`}
                    onFocus={() => setShowMenu(true)}
                    onBlur={handleOnBluer}
                    onChange={handleOnChange}
                    disabled={input.disabled}
                />
            </div>
            {showMenu && (
                <ul
                    className={
                        `max-h-32 w-full bg-base-200 shadow-md z-20 rounded-lg overflow-y-scroll no-scrollbar` +
                        ` ${menu.isMenuFloat && 'absolute'} ` +
                        ` ${menu.className} `
                    }
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
