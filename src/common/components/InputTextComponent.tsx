import { FC, HTMLInputTypeAttribute } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import CustomValidationHelper, { IInputCustomRulesProperties } from '../helper/customValidationHelper'
import UploadImageComponent from './UploadImageComponent'

export interface InputTextComponentProps {
    type?: HTMLInputTypeAttribute
    labelTitle?: string
    containerStyle?: string
    placeholder?: string
    labelStyle?: string
    defaultValue?: string
    className?: string
    validatedInput?: {
        name: string
        regularRules?: Omit<RegisterOptions<any, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined,
        rules?: IInputCustomRulesProperties
        control?: Control<any>
        error?: any
        errorClassName?: string
    }
}

const InputTextComponent: FC<InputTextComponentProps> = ({
    type = 'text',
    containerStyle,
    labelTitle,
    placeholder,
    labelStyle = '',
    validatedInput,
    defaultValue = "",
    className
}) => {
    return (
        <div className={`form-control w-full ${containerStyle}`}>
            {
                !!labelTitle &&
                <label className='label'>
                    <span className={'label-text text-base-content ' + labelStyle}>
                        {labelTitle}
                    </span>
                </label>
            }
            {
                !!validatedInput ?
                    <>
                        <Controller
                            name={validatedInput.name}
                            control={validatedInput.control}
                            rules={CustomValidationHelper(validatedInput?.rules) ?? validatedInput.regularRules}
                            defaultValue={defaultValue}
                            render={({ field }) =>
                                type === 'file' ? (
                                    <UploadImageComponent field={field} className={className} />
                                ) : (
                                    <input
                                        type={type}
                                        placeholder={placeholder}
                                        className={`input input-bordered w-full ${className}`}
                                        {...field}
                                    />
                                )
                            }
                        />
                        {validatedInput.error[validatedInput.name] && (
                            <label className={'label'}>
                                <span className={'m-auto text-sm text-error' + " " + validatedInput.errorClassName}>
                                    {validatedInput.error[validatedInput.name].message}
                                </span>
                            </label>
                        )}
                    </>
                    :
                    <input
                        type={type}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        className={`input input-bordered w-full ${className}`}
                    />
            }
        </div>
    )
};

export default InputTextComponent
