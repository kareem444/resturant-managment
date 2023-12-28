import FormComponent from 'src/common/components/FormComponent'
import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent'
import { useState } from 'react'
import { AdminAddDiscountFeatureFormStructure } from '../structures/AdminAddDiscountStructure'
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent'

const AddDiscountFeature = () => {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    const [showProductList, setShowProductList] = useState(false)
    const [showCustomerList, setShowCustomerList] = useState(false)

    const [selectedProducts, setSelectedProducts] = useState<
        IDropDownSearchItemProperties[]
    >([])
    const [selectedCustomers, setSelectedCustomers] = useState<
        IDropDownSearchItemProperties[]
    >([])

    return (
        <CollapseComponent
            title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}
        >
            <div className='flex gap-10'>
                <FormComponent
                    {...AdminAddDiscountFeatureFormStructure(
                        setShowProductList,
                        setShowCustomerList,
                        setSelectedProducts,
                        setSelectedCustomers
                    )}
                />
                {(showProductList || showCustomerList) && (
                    <div className='w-1/4 flex flex-col gap-5'>
                        {showProductList && (
                            <AdminItemsBoxComponent
                                title='Products'
                                items={selectedProducts}
                                selector={(item: IDropDownSearchItemProperties) => item.text}
                                onDeleteAll={() => setSelectedProducts([])}
                                onDeleteItem={(item: IDropDownSearchItemProperties) =>
                                    setSelectedProducts(prev =>
                                        prev.filter(prevItem => prevItem.value !== item.value)
                                    )
                                }
                            />
                        )}
                        {showCustomerList && (
                            <AdminItemsBoxComponent
                                title='Customers'
                                items={selectedCustomers}
                                selector={(item: IDropDownSearchItemProperties) => item.text}
                                onDeleteAll={() => setSelectedCustomers([])}
                                onDeleteItem={(item: IDropDownSearchItemProperties) =>
                                    setSelectedCustomers(prev =>
                                        prev.filter(prevItem => prevItem.value !== item.value)
                                    )
                                }
                            />
                        )}
                    </div>
                )}
            </div>
        </CollapseComponent>
    )
}

export default AddDiscountFeature
