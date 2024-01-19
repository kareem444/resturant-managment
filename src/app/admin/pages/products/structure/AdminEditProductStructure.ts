import { IDefaultValuesProperties, IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminProductInputsStructure } from './AdminProductInputsStructure'

export const AdminEditProductModalFormStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()

    return {
        inputs: AdminProductInputsStructure(),
        button: {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-pencil'
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