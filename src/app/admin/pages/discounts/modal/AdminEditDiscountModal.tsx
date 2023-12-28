import FormComponent from 'src/common/components/FormComponent';
import { AdminEditDiscountModalFormStructure } from '../structures/AdminAddDiscountStructure';
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent';
import AdminItemsBoxComponent from 'src/app/admin/components/AdminItemsBoxComponent';
import { useState } from 'react';

const AdminEditDiscountModal = () => {
    const [showProductList, setShowProductList] = useState(false)
    const [showCustomerList, setShowCustomerList] = useState(false)

    const [selectedProducts, setSelectedProducts] = useState<
        IDropDownSearchItemProperties[]
    >([])
    const [selectedCustomers, setSelectedCustomers] = useState<
        IDropDownSearchItemProperties[]
    >([])

    return (
        <div className='flex gap-10'>
            <FormComponent
                {...AdminEditDiscountModalFormStructure(
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
    )
};

export default AdminEditDiscountModal;
