import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
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
                iconClassName: '!text-5xl',
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
                data: [
                    { id: 1, name: 'Fixed Size' },
                    { id: 2, name: 'Multi Size' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                defaultSelectedValue: { id: 1, name: 'Fixed Size' },
            }
        },
        {
            labelTitle: translate(`Price`),
            containerStyle: '!col-span-12 !col-start-1',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
    ]
}

const handelFormProperties = (
    translate: (text: string | string[], option?: translateOptions) => string,
    isEdit?: boolean
): IFormComponentProperties => {
    return {
        inputs: inputsItems(translate),
        button: {
            text: translate(isEdit ? TRANSLATE.ADD : TRANSLATE.EDIT),
            icon: isEdit ? 'fi-rr-pencil' : 'fi-rr-plus'
        },
        containerClassName: 'grid-rows-2 grid-flow-col',
        onSubmit: (data: IDefaultValuesProperties) => {
            console.log(data)
        },
        defaultValues: {
            nameEn: '',
            nameAr: '',
            price: '',
            image: ''
        }
    }
}

export const AdminAddProductFeatureFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    return handelFormProperties(translate)
}

export const AdminEditProductModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        ...handelFormProperties(translate, true),
        onSubmit: (data: IDefaultValuesProperties) => { },
        defaultValues: {
            nameEn: 'Dummy Name',
            nameAr: 'اسم وهمي',
            price: '100',
            image: ''
        }
    }
}
/* #endregion */
