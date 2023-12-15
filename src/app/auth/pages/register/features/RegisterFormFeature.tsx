import InputComponent from '../../../../../common/components/InputComponent'
import AuthContainer from '../../../containers/AuthContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { useNavigate } from 'react-router-dom'
import { IRegisterInputs } from '../interfaces/AuthRegisterInterface'

export default function RegisterFormFeature() {
    const { translate } = useTranslate()
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<IRegisterInputs>({
        defaultValues: {
            name: '',
            mobile: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<IRegisterInputs> = data => {
        navigate(routes.otp.path)
    }

    const InputProperty = {
        name: 'name',
        regularRules: {
            required: {
                value: true,
                message: translate(TRANSLATE.THIS_FIELD_IS_REQUIRED)
            }
        },
        control: control,
        error: errors
    }

    return (
        <AuthContainer
            onFormSubmit={onSubmit}
            handelSubmit={handleSubmit}
            title={translate(TRANSLATE.REGISTER)}
            buttonText={translate(TRANSLATE.REGISTER)}
            navigate={{
                text: translate(TRANSLATE.ALREADY_HAVE_ACCOUNT),
                link: { path: routes.login.path, text: translate(TRANSLATE.LOGIN) }
            }}
        >
            <InputComponent
                type='text'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.NAME)}
                validatedInput={InputProperty}
            />

            <InputComponent
                type='number'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.MOBILE)}
                validatedInput={{
                    ...InputProperty,
                    name: 'mobile'
                }}
            />

            <InputComponent
                type='password'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.PASSWORD)}
                validatedInput={{
                    ...InputProperty,
                    name: 'password'
                }}
            />
        </AuthContainer>
    )
}
