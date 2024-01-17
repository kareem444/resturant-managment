import InputComponent from '../../../../../common/components/InputComponent'
import AuthFormContainer from '../../../containers/AuthFormContainer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { ILoginInputs } from '../../login/interfaces/AuthLoginInterface'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AuthRepo } from 'src/app/auth/repo/AuthRepo'
import { NOTIFICATION_TYPE, showNotification   } from 'src/common/components/ShowNotificationComponent'

export default function ForgotPasswordFormFeature() {
    const { translate } = useTranslate()
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm<ILoginInputs>({
        defaultValues: {
            mobile: ''
        }
    })

    const { mutate, isLoading } = useMutate({
        queryFn: (data: { mobile: string }) => AuthRepo.forgetPassword(data.mobile),
        options: {
            onSuccess() {
                showNotification(
                    NOTIFICATION_TYPE.SUCCESS,
                    'Your Request has been sent successfully',
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

    const onSubmit: SubmitHandler<ILoginInputs> = data => {
        mutate(data)
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
            isLoading={isLoading}
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
