import {
    IDefaultValuesProperties,
    IFormComponentProperties
} from 'src/common/components/FormComponent'
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
            containerStyle: '!col-span-8',
            validatedInput: {
                name: 'nameEn',
                rules: {
                    isRequired: true,
                    isEnglish: true
                }
            }
        },
        {
            labelTitle: 'Branch',
            type: 'dropdownSearch',
            containerStyle: '!col-span-8',
            validatedInput: {
                name: 'branch',
                rules: {
                    isRequired: true,
                }
            },
            dropDownSearchInput: {
                data: [
                    { id: 1, name: 'branch 1' },
                    { id: 2, name: 'branch 2' },
                    { id: 3, name: 'branch 3' },
                    { id: 4, name: 'branch 4' }
                ],
                selectors: {
                    value: 'id',
                    text: 'name'
                },
            },
            placeholder: 'Dummy Placeholder'
        },
        {
            labelTitle: translate(`Mobile`),
            containerStyle: '!col-span-8',
            validatedInput: {
                name: 'mobile',
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            },
        },
        {
            type: 'file',
            containerStyle: 'flex justify-center row-span-3 !col-span-4 ',
            uploadFileInput: {
                iconClassName: '!text-5xl',
            },
            className: '!w-3/4 !h-full',
            labelTitle: 'image',
            labelStyle: 'm-auto',
            validatedInput: {
                name: 'image',
                rules: {
                    isRequired: true
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
            text: translate(isEdit ? TRANSLATE.EDIT : TRANSLATE.ADD),
            icon: isEdit ? 'fi-rr-pencil' : 'fi-rr-plus'
        },
        containerClassName: 'grid-rows-3 grid-flow-col',
        childClassnames: '',
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

export const AdminAddDeliveryFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditDeliveryModalFormStructure =
    (): IFormComponentProperties => {
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
