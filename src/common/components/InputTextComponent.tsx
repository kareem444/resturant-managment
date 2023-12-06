import { FC, HTMLInputTypeAttribute } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

interface InputTextComponentProps {
    type?: HTMLInputTypeAttribute
    labelTitle?: string
    containerStyle?: string
    placeholder?: string
    labelStyle?: string
    defaultValue?: string
    validatedInput?: {
        name: string
        rules?: Omit<RegisterOptions<any, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined
        control: Control<any>
        error: any
    }
}

const InputTextComponent: FC<InputTextComponentProps> = ({
    type = 'text',
    containerStyle,
    labelTitle  ,
    placeholder,
    labelStyle = '',
    validatedInput,
    defaultValue
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
                            rules={validatedInput.rules}
                            defaultValue={defaultValue}
                            render={({ field }) =>
                                <input
                                    type={type}
                                    placeholder={placeholder}
                                    className='input input-bordered w-full '
                                    {...field}
                                />
                            }
                        />
                        {validatedInput.error[validatedInput.name] && (
                            <label className='label'>
                                <span className='label-text-alt text-sm text-error'>
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
                        className='input input-bordered w-full '
                    />
            }
        </div>
    )
};

export default InputTextComponent
