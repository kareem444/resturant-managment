import InputTextComponent from '../../../../../common/components/InputTextComponent'
import { Link, useNavigate } from 'react-router-dom'
import AuthContainer from '../../../containers/AuthContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { ILoginInputs } from '../interfaces/AuthLoginInterface'

export default function LoginFormFeature() {
    const { translate } = useTranslate()
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<ILoginInputs>({
        defaultValues: {
            mobile: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<ILoginInputs> = data => {
        navigate(routes.admin.dashboard.fullPath)
    }

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
            title={translate(TRANSLATE.LOGIN)}
            buttonText={translate(TRANSLATE.LOGIN)}
            navigate={{
                text: translate(TRANSLATE.DONT_HAVE_ACCOUNT),
                link: { path: routes.register.path, text: translate(TRANSLATE.REGISTER) }
            }}
        >
            <InputTextComponent
                type='number'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.MOBILE)}
                validatedInput={InputProperty}
            />

            <InputTextComponent
                type='password'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.PASSWORD)}
                validatedInput={{
                    ...InputProperty,
                    name: 'password'
                }}
            />

            <div className='text-right text-primary mt-4'>
                <Link to={routes.forgotPassword.path}>
                    <span className='text-sm  inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200'>
                        {`${translate(TRANSLATE.FORGOT_PASSWORD)}?`}
                    </span>
                </Link>
            </div>
        </AuthContainer>
    )
}
