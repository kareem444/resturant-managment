import { Dispatch, SetStateAction, useState } from 'react'
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent'
import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
export const discountsInputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string,
    onApplyToSelected?: (item: IDropDownSearchItemProperties) => void,
    onProductSelected?: (item: IDropDownSearchItemProperties) => void,
    onCustomerSelected?: (item: IDropDownSearchItemProperties) => void
): InputComponentProps[] => {
    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.AR} )`, {
                isArabic: true
            }),
            className: 'text-right',
            validatedInput: {
                name: 'nameAr',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            labelStyle: 'ml-auto'
        },
        {
            labelTitle: translate(`Amount`),
            validatedInput: {
                name: 'amount',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: 'Discount Type',
            type: 'dropdownSearch',
            validatedInput: {
                name: 'discountType',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Ratio (%)' },
                    { id: 2, name: 'Amount (SAR)' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: 'Branch',
            type: 'dropdownSearch',
            validatedInput: {
                name: 'branch',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Ratio (%)' },
                    { id: 2, name: 'Amount (SAR)' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: translate(`Available Discounts`),
            validatedInput: {
                name: 'availableDiscounts',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: 'Apply To',
            type: 'dropdownSearch',
            containerStyle: '!col-span-12',
            validatedInput: {
                name: 'applyTo',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Order' },
                    { id: 2, name: 'Product' },
                    { id: 3, name: 'Customer' },
                    { id: 4, name: 'Order & Product' },
                    { id: 5, name: 'Order & Customer' },
                    { id: 6, name: 'Product & Customer' },
                    { id: 7, name: 'Order & Product & Customer' }
                ],
                onSelect: onApplyToSelected,
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: 'Product',
            type: 'hidden',
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Product 1' },
                    { id: 2, name: 'Product 2' }
                ],
                onSelect: onProductSelected,
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: 'Customer',
            type: 'hidden',
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Customer 1' },
                    { id: 2, name: 'Customer 2' }
                ],
                onSelect: onCustomerSelected,
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: translate(`Start Date`),
            type: 'datetime-local',
            validatedInput: {
                name: 'startDate',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: translate(`End Date`),
            type: 'datetime-local',
            validatedInput: {
                name: 'endDate',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        }
    ]
}

export const AdminAddDiscountFeatureFormStructure = (
    setShowProductList: Dispatch<SetStateAction<boolean>>,
    setShowCustomerList: Dispatch<SetStateAction<boolean>>,
    setSelectedProducts: Dispatch<SetStateAction<IDropDownSearchItemProperties[]>>,
    setSelectedCustomers: Dispatch<SetStateAction<IDropDownSearchItemProperties[]>>,
): IFormComponentProperties => {
    const { translate } = useTranslate()

    const onApplyToSelected = (item: IDropDownSearchItemProperties) => {
        setShowProductList(show => {
            const productIds = [2, 4, 6, 7]
            setInputsItems(inputs => {
                const newInputs = [...inputs]
                newInputs[7].type = productIds.includes(item.value) ? 'dropdownSearch' : 'hidden'
                newInputs[7].containerStyle = [6, 7].includes(item.value) ? '!col-span-6' : '!col-span-12'
                return newInputs
            })
            return productIds.includes(item.value)
        })

        setShowCustomerList(show => {
            const customerIds = [3, 5, 6, 7]
            setInputsItems(inputs => {
                const newInputs = [...inputs]
                newInputs[8].type = customerIds.includes(item.value) ? 'dropdownSearch' : 'hidden'
                newInputs[8].containerStyle = [6, 7].includes(item.value) ? '!col-span-6' : '!col-span-12'
                return newInputs
            })
            return customerIds.includes(item.value)
        })
    }

    const onProductSelected = (item: IDropDownSearchItemProperties) => {
        setSelectedProducts(products => {
            const isItemExist = products.find(product => product.value === item.value)
            if (isItemExist) return products
            const newProducts = [...products]
            newProducts.push(item)
            return newProducts
        })
        //TODO: dont forget to remove the selected product from the list
    }

    const onCustomerSelected = (item: IDropDownSearchItemProperties) => {
        setSelectedCustomers(customers => {
            const isItemExist = customers.find(customer => customer.value === item.value)
            if (isItemExist) return customers
            const newCustomers = [...customers]
            newCustomers.push(item)
            return newCustomers
        })
        //TODO: dont forget to remove the selected product from the list
    }

    const [inputsItems, setInputsItems] = useState<InputComponentProps[]>([
        ...discountsInputsItems(
            translate,
            onApplyToSelected,
            onProductSelected,
            onCustomerSelected
        )
    ])

    return {
        inputs: inputsItems,
        button: {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus'
        },
        containerClassName: '',
        childClassnames: '',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: '',
            nameAr: '',
            amount: '',
            discountType: '',
            branch: '',
            availableDiscounts: '',
            applyTo: '',
            startDate: '',
            endDate: ''
        }
    }
}

export const AdminEditDiscountModalFormStructure = (
    setShowProductList: Dispatch<SetStateAction<boolean>>,
    setShowCustomerList: Dispatch<SetStateAction<boolean>>,
    setSelectedProducts: Dispatch<SetStateAction<IDropDownSearchItemProperties[]>>,
    setSelectedCustomers: Dispatch<SetStateAction<IDropDownSearchItemProperties[]>>,
): IFormComponentProperties => {
    const { translate } = useTranslate()

    const onApplyToSelected = (item: IDropDownSearchItemProperties) => {
        setShowProductList(show => {
            const productIds = [2, 4, 6, 7]
            setInputsItems(inputs => {
                const newInputs = [...inputs]
                newInputs[7].type = productIds.includes(item.value) ? 'dropdownSearch' : 'hidden'
                newInputs[7].containerStyle = [6, 7].includes(item.value) ? '!col-span-6' : '!col-span-12'
                return newInputs
            })
            return productIds.includes(item.value)
        })

        setShowCustomerList(show => {
            const customerIds = [3, 5, 6, 7]
            setInputsItems(inputs => {
                const newInputs = [...inputs]
                newInputs[8].type = customerIds.includes(item.value) ? 'dropdownSearch' : 'hidden'
                newInputs[8].containerStyle = [6, 7].includes(item.value) ? '!col-span-6' : '!col-span-12'
                return newInputs
            })
            return customerIds.includes(item.value)
        })
    }


    const onProductSelected = (item: IDropDownSearchItemProperties) => {
        setSelectedProducts(products => {
            const isItemExist = products.find(product => product.value === item.value)
            if (isItemExist) return products
            const newProducts = [...products]
            newProducts.push(item)
            return newProducts
        })
        //TODO: dont forget to remove the selected product from the list
    }

    const onCustomerSelected = (item: IDropDownSearchItemProperties) => {
        setSelectedCustomers(customers => {
            const isItemExist = customers.find(customer => customer.value === item.value)
            if (isItemExist) return customers
            const newCustomers = [...customers]
            newCustomers.push(item)
            return newCustomers
        })
        //TODO: dont forget to remove the selected product from the list
    }

    const [inputsItems, setInputsItems] = useState<InputComponentProps[]>([
        ...discountsInputsItems(
            translate,
            onApplyToSelected,
            onProductSelected,
            onCustomerSelected
        )
    ])

    return {
        inputs: inputsItems,
        button: {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus'
        },
        containerClassName: '',
        childClassnames: '',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: 'Discount 1',
            nameAr: 'خصم 1',
            amount: '10',
            discountType: 1,
            branch: 1,
            availableDiscounts: '10',
            applyTo: 1,
            startDate: '2021-09-01T00:00',
            endDate: '2021-09-01T00:00'
        }
    }
}
/* #endregion */
