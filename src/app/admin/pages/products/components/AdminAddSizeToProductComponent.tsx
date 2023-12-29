import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import FormComponent, { IDefaultValuesProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'

interface AdminAddSizeToProductComponentProps {
    onSubmit?: SubmitHandler<IDefaultValuesProperties>
}

const AdminAddSizeToProductComponent: FC<
    AdminAddSizeToProductComponentProps
> = ({ onSubmit }) => {
    const inputs: InputComponentProps[] = [
        {
            labelTitle: 'Size',
            containerStyle: 'col-span-6',
            validatedInput: { name: 'size', rules: { isRequired: true } }
        },
        {
            labelTitle: 'Price',
            containerStyle: 'col-span-6',
            validatedInput: {
                name: 'price',
                rules: { isRequired: true, isNumber: true }
            }
        }
    ]

    return (
        <div className='py-3'>
            <div className='border rounded-md p-5 relative'>
                <h5
                    className='absolute left-20 transform -translate-x-1/2 bg-base-100 px-5 z-10 font-bold'
                    style={{ top: '-15px' }}
                >
                    Add Size
                </h5>
                <FormComponent
                    inputs={inputs}
                    formClassName='grid grid-cols-12 gap-5'
                    containerClassName='!col-span-10'
                    onSubmit={onSubmit}
                    defaultValues={{
                        size: '',
                        price: ''
                    }}
                    button={{
                        buttonClassName: '!w-full !justify-center !mt-0 !mt-auto',
                        icon: 'fi-rr-plus',
                        containerClassName: '!col-span-2'
                    }}
                />
            </div>
        </div>
    )
}

export default AdminAddSizeToProductComponent
