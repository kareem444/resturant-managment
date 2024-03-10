import { InputComponentProps } from 'src/common/components/InputComponent';
import { TRANSLATE } from 'src/common/constants/TranslateConstants';
import { useTranslate } from 'src/common/hooks/useTranslate';
import { AdminExpensesDestInputsConstants } from '../constants/AdminExpensesDestInputsConstants';

export const AdminExpensesDestInputsStructure = (): InputComponentProps[] => {
  const { translate } = useTranslate();
  return [
    {
      labelTitle: translate(`${TRANSLATE.NAME}`),
      containerStyle: '!col-span-12',
      validatedInput: {
        name: AdminExpensesDestInputsConstants.name,
        rules: {
          isRequired: true,
        },
      },
    },
  ];
};
