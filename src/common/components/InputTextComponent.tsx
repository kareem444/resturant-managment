import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

function InputTextComponent(
    props: {
        type: HTMLInputTypeAttribute
        containerStyle: string
        labelTitle: string
        placeholder?: string
        labelStyle?: string
        input: {
            name: string
            rules?: Omit<RegisterOptions<any, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined
            control: Control<any>
            error: any
        }
    }
) {
    return (
        <div className={`form-control w-full ${props.containerStyle}`}>
            <label className='label'>
                <span className={'label-text text-base-content ' + props.labelStyle}>
                    {props.labelTitle}
                </span>
            </label>
            <Controller
                name={props.input.name}
                control={props.input.control}
                rules={props.input.rules}
                render={({ field }) =>
                    <input
                        type={props.type || 'text'}
                        placeholder={props.placeholder || ''}
                        className='input input-bordered w-full '
                        {...field}
                    />
                }
            />
            {props.input.error[props.input.name] && (
                <label className='label'>
                    <span className='label-text-alt text-sm text-error'>
                        {props.input.error[props.input.name].message}
                    </span>
                </label>
            )}
        </div>
    )
}

export default InputTextComponent
