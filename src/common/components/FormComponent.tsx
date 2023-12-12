import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InputTextComponentProps } from './InputTextComponent'
import AdminButtonComponent, {
    AdminButtonContainerProps
} from 'src/app/admin/components/AdminButtonContainer'
import MultipleInputTextsComponent from './MultipleInputTextsComponent'

export interface IDefaultValuesProperties {
    [key: string]: string | number | boolean | undefined
}

interface IFormComponentProperties {
    defaultValues?: IDefaultValuesProperties
    inputs: InputTextComponentProps[][]
    onSubmit?: SubmitHandler<IDefaultValuesProperties>
    button?: AdminButtonContainerProps
}

const FormComponent: FC<IFormComponentProperties> = ({
    defaultValues,
    inputs,
    onSubmit,
    button
}) => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<IDefaultValuesProperties>({
        defaultValues
    })

    const onFormSubmit: SubmitHandler<IDefaultValuesProperties> = data =>
        onSubmit && onSubmit(data)

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {inputs.map(
                (inputs, index) => (
                    inputs.forEach(input => {
                        if (input.validatedInput) {
                            input.validatedInput.control = control
                            input.validatedInput.error = errors
                        }
                    }),
                    (<MultipleInputTextsComponent key={index} inputs={inputs} />)
                )
            )}
            {button && <AdminButtonComponent {...button} type='submit' />}
        </form>
    )
}

export default FormComponent
