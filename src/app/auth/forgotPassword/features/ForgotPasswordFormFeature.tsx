import InputTextComponent from '../../../../common/components/InputTextComponent'
import { Link, useNavigate } from 'react-router-dom'
import AuthContainer from '../../../../common/containers/AuthContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginInputs } from '../../../../common/interfaces/authInterface'
import { useTranslate } from '../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../common/constants/translateConstants'
import { routes } from '../../../../common/routes/routes'

export default function ForgotPasswordFormFeature() {
    const { translate } = useTranslate()
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<ILoginInputs>({
        defaultValues: {
            mobile: '',
        }
    })

    const onSubmit: SubmitHandler<ILoginInputs> = data => navigate(routes.otp.path)

    const InputProperty = {
        name: 'mobile',
        rules: {
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
            title={translate(TRANSLATE.FORGOT_PASSWORD)}
            buttonText={translate(TRANSLATE.SEND_OTP)}
            navigate={{
                text: translate(TRANSLATE.DONT_HAVE_ACCOUNT),
                link: { path: routes.register.path, text: translate(TRANSLATE.REGISTER) }
            }}
        >
            <p className='my-8 font-semibold text-center'>{translate(TRANSLATE.WE_WILL_SEND_OTP)}</p>
            <InputTextComponent
                type='number'
                containerStyle='mt-4 mb-8'
                labelTitle={translate(TRANSLATE.MOBILE)}
                input={InputProperty}
            />
        </AuthContainer>
    )
}
