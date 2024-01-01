import { FC, HTMLInputTypeAttribute } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import { TRANSLATE } from '../constants/TranslateConstants'
import DropDownSearchComponent, {
    DropDownSearchComponentProps, IDropDownSearchItemProperties
} from './DropDownSearchComponent'

interface BasicInputComponentProps {
    type?: HTMLInputTypeAttribute | 'dropdownSearch'
    label?: string
    value?: string
    onChange?: (val: string | IDropDownSearchItemProperties, item?: any) => void
    isError?: boolean
    errorMessage?: string
    dropDownSearchInput?: DropDownSearchComponentProps,
    disabled?: boolean
}

const BasicInputComponent: FC<BasicInputComponentProps> = ({
    type = 'text',
    value,
    onChange,
    isError,
    errorMessage,
    label,
    dropDownSearchInput,
    disabled = false
}) => {
    const { translate } = useTranslate()

    const initInput = () => {
        if (type == 'dropdownSearch')
            return (
                <DropDownSearchComponent
                    {...dropDownSearchInput}
                    onSelect={(val, item) => onChange && onChange(val, item)}
                    input={{
                        ...dropDownSearchInput?.input,
                        disabled: disabled,
                        placeholder: ''
                    }}
                />
            )

        return (
            <input
                type={type}
                className={`input input-bordered w-full`}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                disabled={disabled}
            />
        )
    }

    return (
        <>
            <label className='label'>
                <span className={'label-text text-base-content'}>{label}</span>
            </label>
            {initInput()}
            {isError && (
                <label className='label'>
                    <span className='m-auto text-sm text-error'>
                        {translate(errorMessage || TRANSLATE.THIS_FIELD_IS_REQUIRED)}
                    </span>
                </label>
            )}
        </>
    )
}

export default BasicInputComponent
