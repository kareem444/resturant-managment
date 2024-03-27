import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import LoadingSpinComponent from "./LoadingSpinComponent";
import { useTranslate } from "../hooks/useTranslate";
import { TRANSLATE } from "../constants/TranslateConstants";

export interface DropDownSearchComponentProps {
    input?: {
        placeholder?: string;
        defaultValue?: string;
        className?: string;
        field?: ControllerRenderProps<any, string>;
        disabled?: boolean;
    };
    icon?: {
        name?: string;
        iconOnExpanded?: string;
        className?: string;
    };
    menu?: {
        isMenuFloat: boolean;
        className?: string;
        displayedItems?: 1 | 2 | 3;
    };
    showIcon?: boolean;
    clearAfterSelect?: boolean;
    containerClassName?: string;
    data?: any[];
    onSelect?: (item: IDropDownSearchItemProperties, itemData?: any) => void;
    selectors?: {
        text: string;
        value: string;
    };
    defaultSelectedValue?: any;
    isLoading?: boolean;
    isError?: boolean;
    onInputChange?: (val: string) => void;
}

export interface IDropDownSearchItemProperties {
    text: string;
    value: any;
}

const DropDownSearchComponent: FC<DropDownSearchComponentProps> = ({
    showIcon = true,
    input = {
        placeholder: "Search...",
        defaultValue: undefined,
        className: "",
        disabled: false,
    },
    icon = {
        name: "fi-rs-plus",
        iconOnExpanded: "fi-br-minus",
        className: "text-gray-600",
    },
    menu = {
        isMenuFloat: true,
        displayedItems: 3,
    },
    containerClassName,
    data,
    onSelect,
    selectors,
    defaultSelectedValue,
    clearAfterSelect = false,
    isLoading = false,
    isError = false,
    onInputChange,
}) => {
    const [items, setItems] = useState<IDropDownSearchItemProperties[]>();
    const [searchedItems, setSearchedItems] =
        useState<IDropDownSearchItemProperties[]>();

    useEffect(() => {
        if (data) {
            const convertData = data.map((item) => {
                return {
                    text: selectors ? item[selectors.text] : undefined,
                    value: selectors ? item[selectors.value] : undefined,
                };
            });
            setItems(convertData);
            setSearchedItems(convertData);
        }
    }, [data]);

    const [selected, setSelected] = useState<IDropDownSearchItemProperties>();
    const [showMenu, setShowMenu] = useState(false);

    let timer: ReturnType<typeof setTimeout> | undefined = undefined;

    const inputRef = useRef<HTMLInputElement>(null);

    const resetButton = () => {
        setSelected(undefined);
        input.field?.onChange(undefined);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (timer) {
            clearTimeout(timer);
        }

        if (selected) {
            resetButton();
        }

        if (onInputChange) {
            onInputChange(e.target.value);
        }

        timer = setTimeout(() => {
            const searchResult = items?.filter((item) =>
                item.text.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchedItems(searchResult);
        }, 500);
    };

    useEffect(() => {
        if (defaultSelectedValue) {
            setSelected({
                text: defaultSelectedValue[selectors!.text],
                value: defaultSelectedValue[selectors!.value],
            });
            if (input.field) {
                input.field.onChange(defaultSelectedValue[selectors!.value]);
            }
        }
    }, [defaultSelectedValue]);

    const handleOnChoose = (item: IDropDownSearchItemProperties) => {
        setSelected(item);
        const selectedItemData = data?.find(
            (dataItem) => dataItem[selectors!.value] === item.value
        );
        if (inputRef.current) {
            inputRef.current.value = item.text;
        }
        if (input.field) {
            input.field?.onChange(item.value);
        }
        if (onSelect) {
            onSelect(item, selectedItemData);
        }
        if (clearAfterSelect) {
            resetButton();
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };

    const handleOnBluer = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setShowMenu(false);
        }, 200);
    };

    const handelICon = (): string | undefined => {
        if (showIcon) {
            if (showMenu) return icon.iconOnExpanded;
            return icon.name;
        }
    };

    const handelDisplayedItems = (): string => {
        switch (menu.displayedItems) {
            case 1:
                return "max-h-12";
            case 2:
                return "max-h-20";
            case 3:
                return "max-h-32";
            default:
                return "max-h-32";
        }
    }

    const { isArabic, translate } = useTranslate();

    return (
        <div className={"relative" + " " + containerClassName}>
            <div className="relative">
                {showIcon && !isLoading && !isError && (
                    <i
                        className={
                            `fi w-4 h-4 absolute top-1/3 text-gray-600` +
                            ` ${isArabic ? "left-4" : "right-4"} ` +
                            ` ${icon.className} ` +
                            `${handelICon()}`
                        }
                    />
                )}
                {isLoading && (
                    <LoadingSpinComponent
                        className={
                            `!w-4 !h-4 absolute top-1/3` +
                            " " +
                            (isArabic ? "left-4" : "right-4")
                        }
                    />
                )}
                {isError && (
                    <i
                        className={
                            "fi fi-rr-exclamation !w-4 !h-4 absolute top-1/3 text-red-500" +
                            " " +
                            (isArabic ? "left-4" : "right-4")
                        }
                    />
                )}
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={translate(TRANSLATE.SEARCH)}
                    defaultValue={selected?.text ?? input.defaultValue ?? undefined}
                    className={
                        "input input-bordered w-full disabled:bg-inherit disabled:border-gray-400 dark:disabled:border-gray-600" +
                        " " +
                        input.className
                    }
                    onFocus={() => setShowMenu(true)}
                    onBlur={handleOnBluer}
                    onChange={handleOnChange}
                    disabled={input.disabled || isLoading || isError}
                />
            </div>
            {showMenu && (
                <ul
                    className={
                        `w-full bg-zinc-50 dark:bg-base-200 border dark:border-none shadow-md z-20 rounded-lg overflow-y-scroll no-scrollbar` +
                        ` ${menu.isMenuFloat && "absolute"} ` +
                        ` ${handelDisplayedItems()} `+
                        ` ${menu.className} `
                    }
                >
                    {searchedItems?.map((item, index) => (
                        <li key={index}>
                            <div
                                className="p-2 hover:bg-blue-700 hover:text-white cursor-pointer "
                                onClick={() => handleOnChoose(item)}
                            >
                                {item.text}
                            </div>
                            {index !== searchedItems.length - 1 && (
                                <div className="divider my-0 h-0" />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownSearchComponent;
