import { InputComponentProps } from "src/common/components/InputComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";
import { AdminComboOffersInputsConstants } from "../constants/AdminComboOffersInputsConstants";

export const AdminComboOffersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate();

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminComboOffersInputsConstants.name,
                rules: {
                    isRequired: true,
                },
            },
        },
        {
            labelTitle: translate(`Code`),
            validatedInput: {
                name: AdminComboOffersInputsConstants.code,
                rules: {
                    isRequired: true,
                },
            },
        },
    ];
};
