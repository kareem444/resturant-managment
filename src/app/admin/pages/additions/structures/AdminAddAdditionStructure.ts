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
                containerStyle:'!col-span-4 !col-start-1 !col-start-1',
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
                containerStyle:'!col-span-4 !col-start-1 !col-start-5',
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
                labelTitle: translate(`Price`),
                containerStyle:'!col-span-8',
                validatedInput: {
                    name: 'price',
                    rules: {
                        isRequired: true,
                        isNumber: true
                    }
                },
            },
            {
                type: 'file',
                containerStyle: 'flex justify-center row-span-2 !col-span-4 ',
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
        containerClassName: 'grid-rows-2 grid-flow-col',
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

export const AdminAddAdditionFeatureFormStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        return handelFormProperties(translate)
    }

export const AdminEditAdditionModalFormStructure =
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
