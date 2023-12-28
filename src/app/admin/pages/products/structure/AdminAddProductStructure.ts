import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { translateOptions, useTranslate } from 'src/common/hooks/useTranslate'

/* #region add unit form items Structure */
const inputsItems = (
    translate: (text: string | string[], option?: translateOptions) => string
): InputComponentProps[] => {
    return [
        
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
        containerClassName: '!grid-cols-4',
        childClassnames: 'sm:!col-span-2',
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
