import InputComponent from '../../../../../common/components/InputComponent'
import AuthFormContainer from '../../../containers/AuthFormContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { useNavigate } from 'react-router-dom'
import { IRegisterInputs } from '../interfaces/AuthRegisterInterface'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AuthRepo } from 'src/app/auth/repo/AuthRepo'
import { NOTIFICATION_TYPE, showNotification } from 'src/common/components/ShowNotificationComponent'

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
            email: '',
            mobile: '',
            organizationName: '',
            password: ''
        }
    })

    const { mutate, isLoading } = useMutate({
        queryFn: (data) => AuthRepo.requestTrail(data),
        options: {
            onSuccess() {
                navigate(routes.login.path)
                showNotification(
                    NOTIFICATION_TYPE.SUCCESS,
                    'User created successfully',
                )
            },
            onError(e) {
                showNotification(
                    NOTIFICATION_TYPE.ERROR,
                    e?.message || 'Something went wrong',
                )
            }
        }
    })

    const onSubmit: SubmitHandler<IRegisterInputs> = data => {
        mutate(data)
    }

    const InputProperty = {
        name: 'name',
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
            buttonText={translate(TRANSLATE.REGISTER)}
            isLoading={isLoading}
            navigate={{
                text: translate(TRANSLATE.ALREADY_HAVE_ACCOUNT),
                link: { path: routes.login.path, text: translate(TRANSLATE.LOGIN) }
            }}
        >
            <InputComponent
                type='text'
                labelTitle={translate(TRANSLATE.NAME)}
                validatedInput={InputProperty}
            />

            <InputComponent
                type='email'
                containerStyle='mt-4'
                labelTitle={'Email'}
                validatedInput={{
                    ...InputProperty,
                    name: 'email',
                    rules: {
                        ...InputProperty.rules,
                        isEmail: true
                    }
                }}
            />

            <InputComponent
                type='number'
                containerStyle='mt-4'
                labelTitle={translate(TRANSLATE.MOBILE)}
                validatedInput={{
                    ...InputProperty,
                    name: 'mobile',
                    rules: {
                        ...InputProperty.rules,
                        isNumber: true
                    }
                }}
            />

            <InputComponent
                type='text'
                containerStyle='mt-4'
                labelTitle={'Organization Name'}
                validatedInput={{
                    ...InputProperty,
                    name: 'organizationName'
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
        </AuthFormContainer>
    )
}
