import { RegisterOptions } from 'react-hook-form'

export interface IInputCustomRulesProperties {
    isRequired?: boolean | { value: boolean; message: string }
    isEmail?: boolean | { value: boolean; message: string }
    isEnglish?: boolean | { value: boolean; message: string }
    isArabic?: boolean | { value: boolean; message: string }
    isMobile?: boolean | { value: boolean; message: string }
    isNumber?: boolean | { value: boolean; message: string }
    minLength?: number | { value: number; message: string }
    maxLength?: number | { value: number; message: string }
    maxFileSize?: number | { value: number; message: string }
}

interface IValidationArrayProperties {
    ruleToValidate: keyof RegisterOptions<any, string>
    rule: keyof IInputCustomRulesProperties
    defaultMessage: string
    validation?: boolean | number | string | RegExp
}

const validationArray: IValidationArrayProperties[] = [
    {
        ruleToValidate: 'required',
        rule: 'isRequired',
        defaultMessage: 'This field is required'
    },
    {
        ruleToValidate: 'pattern',
        rule: 'isEmail',
        defaultMessage: 'Please enter a valid email',
        validation: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    },
    {
        ruleToValidate: 'pattern',
        rule: 'isEnglish',
        defaultMessage: 'Please enter a valid english',
        validation: /^[a-zA-Z ]+$/
    },
    {
        ruleToValidate: 'pattern',
        rule: 'isArabic',
        defaultMessage: 'Please enter a valid arabic',
        validation: /^[\u0621-\u064A\u0660-\u0669 ]+$/
    },
    {
        ruleToValidate: 'pattern',
        rule: 'isMobile',
        defaultMessage: 'Please enter a valid mobile',
        validation: /^(010|011|012|015)[0-9]{8}$/
    },
    {
        ruleToValidate: 'pattern',
        rule: 'isNumber',
        defaultMessage: 'Please enter a valid number',
        validation: /^[0-9]*$/
    },
    {
        ruleToValidate: 'minLength',
        rule: 'minLength',
        defaultMessage: 'Please enter a valid minLength'
    },
    {
        ruleToValidate: 'maxLength',
        rule: 'maxLength',
        defaultMessage: 'Please enter a valid maxLength'
    },
    {
        ruleToValidate: 'validate',
        rule: 'maxFileSize',
        defaultMessage: 'Please enter a valid maxFileSize'
    }
]

const CustomValidationHelper = (
    customRules?: IInputCustomRulesProperties
): RegisterOptions<any, string> => {
    const rules: RegisterOptions<any, string> = {}
    if (customRules) {
        for (const [key, value] of Object.entries(customRules)) {
            if (value) {
                if (typeof value === 'boolean' || typeof value.value == 'boolean') {
                    if (value === false || value.value === false) {
                        continue
                    }
                }
                const rule = validationArray.find(rule => rule.rule === key) as IValidationArrayProperties
                const validation = rule.validation ?? value.value ?? value
                const message = value.message ?? rule.defaultMessage
                if (key === 'maxFileSize') {
                    rules.validate = (file: File) => {
                        if (file.size > (validation * 1024 * 1024)) {
                            return message
                        }
                        return true
                    }
                    continue
                }
                rules[rule.ruleToValidate] = {
                    value: validation,
                    message: message
                }
            }
        }
    }
    return rules
}

export default CustomValidationHelper
