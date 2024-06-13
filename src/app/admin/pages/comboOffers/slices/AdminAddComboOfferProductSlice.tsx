import { FC, useState } from 'react'
import AdminButtonComponent from 'src/app/admin/components/AdminButtonContainer'
import BasicInputComponent from 'src/common/components/BasicInputComponent'
import { IComboOfferProduct } from '../interfaces/AdminComboOffersInterface'
import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import { IAdminProductsModel } from 'src/app/admin/models/AdminProductsModel'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { AdminProductsRepo } from '../../products/repo/AdminProductsRepo'

interface AdminAddComboOfferProductProps {
    onSubmit?: (val: any) => void
}

const AdminAddComboOfferProductSlice: FC<AdminAddComboOfferProductProps> = ({
    onSubmit
}) => {
    const [result, setResult] = useState<IComboOfferProduct>({
        product: undefined,
        size: undefined,
        price: ''
    })

    const handelOnSubmit = () => {
        if (onSubmit) {
            onSubmit(result)
        }
        setResult({ ...result, price: '' })
    }

    const isButtonDisabled = result.product === undefined || result.price.length < 1

    const { data, isLoading, isError } = useFetch<IAdminProductsModel[]>({
        key: AsyncStateConstants.products,
        queryFn: AdminProductsRepo.getProducts,
        options: {
            isExecuteOnInitIfNoData: true,
        },
    });

    return (
        <div className='py-3 mt-5'>
            <div className='border rounded-md p-5 relative'>
                <h5
                    className='absolute left-20 transform -translate-x-1/2 bg-base-100 px-5 z-10 font-bold'
                    style={{ top: '-15px' }}
                >
                    Add Product
                </h5>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-6'>
                        <BasicInputComponent
                            type='dropdownSearch'
                            label='Product'
                            onChange={(val: any, item: any) => setResult({ ...result, product: item, size: undefined })}
                            dropDownSearchInput={{
                                data: data || [],
                                isLoading,
                                isError,
                                selectors: { text: 'name', value: 'id' },
                                onInputChange: () => setResult({ ...result, size: undefined, product: undefined }),
                            }}
                        />
                    </div>
                    <div className='col-span-6'>
                        <BasicInputComponent
                            type='dropdownSearch'
                            label='Size'
                            onChange={(val: any) => setResult({ ...result, size: val.text })}
                            dropDownSearchInput={{
                                data: result.product?.sizes || [],
                                isLoading,
                                isError,
                                selectors: { text: 'size', value: 'size' },
                                onInputChange: () => setResult({ ...result, size: undefined }),
                                clearSearchInput: result.product === undefined || result.product?.sizes?.length === 0
                            }}
                            disabled={result.product === undefined || result.product?.sizes?.length === 0}
                        />
                    </div>
                    <div className='col-span-6'>
                        <BasicInputComponent
                            type='number'
                            label='Price'
                            value={result?.price}
                            onChange={(val: any) => setResult({ ...result, price: val })}
                        />
                    </div>
                    <div className='col-span-6 items-end flex'>
                        <AdminButtonComponent
                            icon='fi-rr-plus'
                            disabled={isButtonDisabled}
                            onClick={handelOnSubmit}
                            buttonClassName={`!w-full !justify-center`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddComboOfferProductSlice
