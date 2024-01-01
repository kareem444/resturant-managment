import { InputComponentProps } from 'src/common/components/InputComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'

export const ComboOfferInputsStructure = (): InputComponentProps[] => {
    const { translate } = useTranslate()

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME} ( ${TRANSLATE.EN} )`),
            containerStyle: '!col-start-1 !col-span-5',
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
            containerStyle: '!col-span-5',
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
            labelTitle: 'Branch',
            type: 'dropdownSearch',
            containerStyle: '!col-start-1 !col-span-10',
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
            containerStyle: 'flex justify-center row-span-2 ',
            uploadFileInput: {
                iconClassName: '!text-5xl'
            },
            className: '!w-full !h-full',
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
