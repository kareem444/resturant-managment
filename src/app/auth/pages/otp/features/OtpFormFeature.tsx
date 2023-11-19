import AuthContainer from '../../../containers/AuthContainer'
import { useTranslate } from '../../../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import { routes } from '../../../../../common/routes/routes'
import { useState } from 'react'
import OtpComponent from '../../../components/AuthOtpComponent'
import { useNavigate } from 'react-router-dom'

export default function OtpFormFeature() {
    const { translate } = useTranslate()
    const [otp, setOtp] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const onSubmit = () => {
        if (otp.length !== 4) {
            setError(true)
        } else {
            setError(false)
            navigate(routes.login.path)
        }
    }

    return (
        <AuthContainer
            onFormSubmit={onSubmit}
            title={translate(TRANSLATE.OTP_VERIFICATION)}
            buttonText={translate(TRANSLATE.VERIFY)}
            navigate={{
                text: translate(TRANSLATE.DONT_HAVE_ACCOUNT),
                link: { path: routes.register.path, text: translate(TRANSLATE.REGISTER) }
            }}
            errorMessage={error ? translate(TRANSLATE.INVALID_OTP) : undefined}
        >
            <div className="my-4 text-center text-sm font-medium text-gray-400">
                <p>{translate(TRANSLATE.WE_HAVE_SENT_OTP)} 12454</p>
            </div>
            <OtpComponent numberOfInputs={4} styleClasses='mt-20 mb-8' onChange={(e: string) => setOtp(e)} />
        </AuthContainer>
    )
}
