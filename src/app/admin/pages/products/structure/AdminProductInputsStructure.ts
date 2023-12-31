import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import useProductUiReducer from '../redux/ui/useProductUiReducer'
import { IDropDownSearchItemProperties } from 'src/common/components/DropDownSearchComponent'

export const ProductInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()

    const {
        state,
        changeProductType,
        removeAllProductSize,
        addProductTax,
        addProductAddition
    } = useProductUiReducer()

    const handelOnProductTypeSelect = (value: IDropDownSearchItemProperties) => {
        if (value.value === 1) {
            changeProductType({ productType: 'fixed' })
            removeAllProductSize()
            return
        }
        changeProductType({ productType: 'multi' })
    }

    const handelOnAddTax = (value: IDropDownSearchItemProperties) => { 
        addProductTax({ id: value.value, name: value.text })
    }

    const handelOnAddAddition = (value: IDropDownSearchItemProperties) => { 
        addProductAddition({ id: value.value, name: value.text })
    }

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            containerStyle: '!col-start-1',
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
            containerStyle: '',
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
            labelTitle: 'Group',
            type: 'dropdownSearch',
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Group 1' },
                    { id: 2, name: 'Group 2' }
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
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'branch',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Branch 1' },
                    { id: 2, name: 'Branch 2' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            type: 'file',
            containerStyle: 'flex justify-center row-span-2 !col-span-6 ',
            uploadFileInput: {
                iconClassName: '!text-5xl'
            },
            className: '!w-2/4 !h-full',
            labelTitle: 'image',
            labelStyle: 'm-auto',
            validatedInput: {
                name: 'image',
                rules: {
                    isRequired: true
                }
            }
        },
        {
            labelTitle: 'Taxes',
            type: 'dropdownSearch',
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Tax 1' },
                    { id: 2, name: 'Tax 2' }
                ],
                clearAfterSelect: true,
                onSelect: handelOnAddTax,
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: 'Additions',
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'Addition 1' },
                    { id: 2, name: 'Addition 2' }
                ],
                onSelect: handelOnAddAddition,
                clearAfterSelect: true,
                selectors: {
                    value: 'id',
                    text: 'name'
                }
            }
        },
        {
            labelTitle: translate(`Code`),
            containerStyle: '!col-start-1',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: 'Product Type',
            type: 'dropdownSearch',
            containerStyle: '',
            validatedInput: {
                name: 'group',
                rules: {
                    isRequired: true,
                    isArabic: true
                }
            },
            dropDownSearchInput: {
                onSelect: handelOnProductTypeSelect,
                data: [
                    { id: 1, name: 'Fixed Size' },
                    { id: 2, name: 'Multi Size' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 1, name: 'Fixed Size' }
            }
        },
        {
            labelTitle: translate(`Price`),
            type: state.productType == 'fixed' ? 'number' : 'hidden',
            containerStyle: '!col-span-12 !col-start-1',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        }
    ]
}
