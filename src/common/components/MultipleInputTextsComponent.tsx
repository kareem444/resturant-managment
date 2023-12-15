import { FC } from 'react'
import InputComponent, { InputComponentProps } from './InputComponent'

interface MultipleInputTextsComponentProps {
    inputs: InputComponentProps[]
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
                            <InputComponent {...input} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default MultipleInputTextsComponent
