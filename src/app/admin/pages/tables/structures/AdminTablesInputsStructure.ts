import { InputComponentProps } from 'src/common/components/InputComponent';
import { useTranslate } from 'src/common/hooks/useTranslate';

export const AdminTablesInputsStructure = (): InputComponentProps[] => {
  const { translate } = useTranslate();
  return  [
    {
        labelTitle: translate(`Number`),
        validatedInput: {
            name: 'number',
            rules: {
                isRequired: true,
                isNumber: true
            }
        },
    },
    {
        labelTitle: 'Branch',
        type: 'dropdownSearch',
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
            menu:{
                className:'!max-h-24',
                isMenuFloat: false
            }
        },
        placeholder: 'Dummy Placeholder'
    },
]
};
