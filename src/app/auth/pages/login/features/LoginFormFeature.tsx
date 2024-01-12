import InputComponent from '../../../../../common/components/InputComponent'
import { Link, useNavigate } from 'react-router-dom'
import AuthFormContainer from '../../../containers/AuthFormContainer'
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
            isRequired: true,
        },
        control: control,
        error: errors
    }

    return (
        <AuthFormContainer
            onFormSubmit={onSubmit}
            handelSubmit={handleSubmit}
            buttonText={translate(TRANSLATE.LOGIN)}
            inputsContainerClassName='!mb-0'
            navigate={{
                text: translate(TRANSLATE.DONT_HAVE_ACCOUNT),
                link: { path: routes.register.path, text: translate(TRANSLATE.REGISTER) }
            }}
        >
            <InputComponent
                type='text'
                containerStyle='mt-4'
                labelTitle={'Organization Code'}
                validatedInput={{
                    ...InputProperty,
                    name: 'organizationCode'
                }}
            />

            <InputComponent
                type='number'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.MOBILE)}
                validatedInput={InputProperty}
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

            <div className='text-right mt-4'>
                <Link to={routes.forgotPassword.path}>
                    <span className='text-sm  inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200'>
                        {`${translate(TRANSLATE.FORGOT_PASSWORD)}?`}
                    </span>
                </Link>
            </div>
        </AuthFormContainer>
    )
}
