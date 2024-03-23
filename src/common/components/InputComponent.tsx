import { FC, HTMLInputTypeAttribute } from 'react'
import {
    Control,
    Controller,
    ControllerRenderProps,
    RegisterOptions
} from 'react-hook-form'
import CustomValidationHelper, {
    IInputCustomRulesProperties
} from '../helper/customValidationHelper'
import UploadFileComponent, {
    UploadFileComponentProps
} from './UploadImageComponent'
import DropDownSearchComponent, {
    DropDownSearchComponentProps
} from './DropDownSearchComponent'

export interface InputComponentProps {
    type?: HTMLInputTypeAttribute | 'dropdown' | 'dropdownSearch'
    labelTitle?: string
    containerStyle?: string
    placeholder?: string
    labelStyle?: string
    defaultValue?: string
    className?: string
    disabled?: boolean
    uploadFileInput?: UploadFileComponentProps
    dropDownSearchInput?: DropDownSearchComponentProps
    validatedInput?: {
        name: string
        regularRules?:
        | Omit<
            RegisterOptions<any, string>,
            'valueAsNumber' | 'valueAsDate' | 'setValueAs'
        >
        | undefined
        rules?: IInputCustomRulesProperties
        control?: Control<any>
        error?: any
        errorClassName?: string
    }
}

const InputComponent: FC<InputComponentProps> = ({
    type = 'text',
    containerStyle,
    labelTitle,
    placeholder,
    labelStyle = '',
    validatedInput,
    defaultValue = '',
    className,
    dropDownSearchInput,
    uploadFileInput,
    disabled = false
}) => {
    const initInput = (field?: ControllerRenderProps<any, string>) => {
        if (field) { field.disabled = disabled }

        if (type == 'file')
            return (
                <UploadFileComponent
                    {...uploadFileInput}
                    iconClassName={uploadFileInput?.iconClassName}
                    field={field}
                    className={className}
                    disabled={field?.disabled ?? disabled}
                />
            )

        if (type == 'dropdownSearch')
            return (
                <DropDownSearchComponent
                    {...dropDownSearchInput}
                    input={{ ...dropDownSearchInput?.input, field, defaultValue, placeholder, className, disabled: field?.disabled ?? disabled }}
                />
            )

        return (
            <input
                type={type}
                placeholder={placeholder}
                defaultValue={!field ? defaultValue : undefined}
                className={`input input-bordered w-full ${className}`}
                disabled={field?.disabled ?? disabled}
                {...field}
            />
        )
    }

    return (
        <>
            {
                type !== 'hidden' && (
                    <div className={`form-control w-full ${containerStyle}`}>
                        {!!labelTitle && (
                            <label className='label'>
                                <span className={'label-text text-base-content ' + labelStyle}>
                                    {labelTitle}
                                </span>
                            </label>
                        )}
                        {!!validatedInput ? (
                            <>
                                <Controller
                                    name={validatedInput.name}
                                    control={validatedInput.control}
                                    rules={
                                        CustomValidationHelper(validatedInput?.rules) ??
                                        validatedInput.regularRules
                                    }
                                    defaultValue={defaultValue}
                                    render={({ field }) => initInput(field)}
                                />
                                {validatedInput.error[validatedInput.name] && (
                                    <label className={'label'}>
                                        <span
                                            className={
                                                'm-auto text-sm text-error' +
                                                ' ' +
                                                validatedInput.errorClassName
                                            }
                                        >
                                            {validatedInput.error[validatedInput.name].message}
                                        </span>
                                    </label>
                                )}
                            </>
                        ) : (
                            initInput()
                        )}
                    </div>
                )
            }
        </>
    )
}

export default InputComponent
