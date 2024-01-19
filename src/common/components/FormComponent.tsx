import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputComponent, { InputComponentProps } from './InputComponent'
import AdminButtonComponent, {
    AdminButtonContainerProps
} from 'src/app/admin/components/AdminButtonContainer'

export interface IDefaultValuesProperties {
    [key: string]: string | number | boolean | undefined
}

export interface IFormComponentProperties {
    defaultValues?: IDefaultValuesProperties
    containerClassName?: string
    formClassName?: string
    childClassnames?: string
    inputs: InputComponentProps[]
    onSubmit?: SubmitHandler<any>
    button?: AdminButtonContainerProps,
    child?: JSX.Element
}

const FormComponent: FC<IFormComponentProperties> = ({
    defaultValues,
    inputs,
    onSubmit,
    button,
    containerClassName = '',
    childClassnames,
    formClassName = '',
    child
}) => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<IDefaultValuesProperties>({
        defaultValues
    })

    const onFormSubmit: SubmitHandler<any> = data => onSubmit && onSubmit(data)

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={'flex-1' + ' ' + formClassName}>
            <div
                className={
                    'grid grid-cols-1 grid-rows-1 sm:grid-cols-12 gap-5 grid-flow-row' + ' ' + containerClassName
                }
            >
                {inputs.map((input, index) => {
                    if (input.validatedInput) {
                        input.validatedInput.control = control
                        input.validatedInput.error = errors
                    }
                    return (
                        <InputComponent
                            {...input}
                            key={index}
                            containerStyle={`col-span-6 ${childClassnames} ${input.containerStyle}`}
                        />
                    )
                })}
            </div>
            {child}
            {button && <AdminButtonComponent {...button} type='submit' />}
        </form>
    )
}

export default FormComponent
