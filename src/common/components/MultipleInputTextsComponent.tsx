import { FC } from 'react'
import InputTextComponent, { InputTextComponentProps } from './InputTextComponent'

interface MultipleInputTextsComponentProps {
    inputs: InputTextComponentProps[]
    containerClassName?: string
}

const MultipleInputTextsComponent: FC<
    MultipleInputTextsComponentProps
> = ({ inputs, containerClassName }) => {
    return (
        <div className={`flex gap-10 ${containerClassName}`}>
            {
                inputs.map((input, index) => {
                    return (
                        <div className='flex-1' key={index}>
                            <InputTextComponent {...input} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default MultipleInputTextsComponent
