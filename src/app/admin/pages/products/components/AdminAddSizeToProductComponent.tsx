import { FC, useState } from 'react'
import AdminButtonComponent from 'src/app/admin/components/AdminButtonContainer'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'

interface AdminAddSizeToProductComponentProps {
    onSubmit?: (val: { size: string, price: string }) => void
}

const AdminAddSizeToProductComponent: FC<
    AdminAddSizeToProductComponentProps
> = ({ onSubmit }) => {
    const { translate } = useTranslate()

    const [result, setResult] = useState({
        size: '',
        price: ''
    })

    const [error, setError] = useState<{ size: boolean; price: boolean }>({
        size: false,
        price: false
    })

    const handelOnSubmit = () => {
        if (onSubmit) {
            onSubmit(result)
        }
        setResult({ size: '', price: '' })
    }

    return (
        <div className='py-3 mt-5'>
            <div className='border rounded-md p-5 relative'>
                <h5
                    className='absolute left-20 transform -translate-x-1/2 bg-base-100 px-5 z-10 font-bold'
                    style={{ top: '-15px' }}
                >
                    Add Size
                </h5>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-5'>
                        <label className='label'>
                            <span className={'label-text text-base-content '}>Size</span>
                        </label>
                        <input
                            type='text'
                            className={`input input-bordered w-full`}
                            value={result?.size}
                            onChange={e => {
                                setResult({ ...result, size: e.target.value })
                                if (e.target.value.length > 0) {
                                    setError({ ...error, size: false })
                                } else {
                                    setError({ ...error, size: true })
                                }
                            }}
                        />
                        {error.size && (
                            <label className='label'>
                                <span className='m-auto text-sm text-error'>
                                    {translate(TRANSLATE.THIS_FIELD_IS_REQUIRED)}
                                </span>
                            </label>
                        )}
                    </div>
                    <div className='col-span-5'>
                        <label className='label'>
                            <span className={'label-text text-base-content '}>Price</span>
                        </label>
                        <input
                            type='number'
                            className={`input input-bordered w-full`}
                            value={result?.price}
                            onChange={e => {
                                setResult({ ...result, price: e.target.value })
                                if (e.target.value.length > 0) {
                                    setError({ ...error, price: false })
                                } else {
                                    setError({ ...error, price: true })
                                }
                            }}
                        />
                        {error.price && (
                            <label className='label'>
                                <span className='m-auto text-sm text-error'>
                                    {translate(TRANSLATE.THIS_FIELD_IS_REQUIRED)}
                                </span>
                            </label>
                        )}
                    </div>
                    <AdminButtonComponent
                        icon='fi-rr-plus'
                        containerClassName='col-span-2'
                        disabled={result.size.length < 1 || result.price.length < 1}
                        onClick={handelOnSubmit}
                        buttonClassName={
                            `!w-full !justify-center` +
                            ` ` +
                            `${error.size || error.price
                                ? 'cursor-not-allowed !my-auto'
                                : 'mt-auto'
                            }`
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminAddSizeToProductComponent
