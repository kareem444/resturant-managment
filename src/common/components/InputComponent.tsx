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
import UploadImageComponent from './UploadImageComponent'
import DropDownSearchComponent, { DropDownSearchComponentProps } from './DropDownSearchComponent'

export interface InputComponentProps {
    type?: HTMLInputTypeAttribute | 'dropdown' | 'dropdownSearch'
    labelTitle?: string
    containerStyle?: string
    placeholder?: string
    labelStyle?: string
    defaultValue?: string
    className?: string
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
    dropDownSearchInput
}) => {
    const initInput = (field?: ControllerRenderProps<any, string>) => {
        if (type == 'file')
            return <UploadImageComponent field={field} className={className} />
        if (type == 'dropdownSearch')
            return (
                <DropDownSearchComponent
                    {...dropDownSearchInput}
                    input={{ field, defaultValue, placeholder, className }}
                />
            )

        return (
            <input
                type={type}
                placeholder={placeholder}
                defaultValue={!field ? defaultValue : undefined}
                className={`input input-bordered w-full ${className}`}
                {...field}
            />
        )
    }

    return (
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

export default InputComponent
