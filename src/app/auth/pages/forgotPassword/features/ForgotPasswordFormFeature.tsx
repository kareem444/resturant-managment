import InputComponent from '../../../../../common/components/InputComponent'
import { useNavigate } from 'react-router-dom'
import AuthFormContainer from '../../../containers/AuthFormContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { ILoginInputs } from '../../login/interfaces/AuthLoginInterface'

export default function ForgotPasswordFormFeature() {
    const { translate } = useTranslate()
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<ILoginInputs>({
        defaultValues: {
            mobile: ''
        }
    })

    const onSubmit: SubmitHandler<ILoginInputs> = data => {
        // navigate(routes.otp.path)
    }

    const InputProperty = {
        name: 'mobile',
        rules: {
            isRequired: true
        },
        control: control,
        error: errors
    }

    return (
        <AuthFormContainer
            onFormSubmit={onSubmit}
            handelSubmit={handleSubmit}
            buttonText={translate(TRANSLATE.SEND_OTP)}
            navigate={{
                text: translate(TRANSLATE.DONT_HAVE_ACCOUNT),
                link: {
                    path: routes.register.path,
                    text: translate(TRANSLATE.REGISTER)
                }
            }}
        >
            <p className='my-4 font-semibold text-center'>
                {translate(TRANSLATE.WE_WILL_SEND_OTP)}
            </p>
            <InputComponent
                type='number'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.MOBILE)}
                validatedInput={InputProperty}
            />
        </AuthFormContainer>
    )
}
