import AuthContainer from '../../containers/AuthContainer'
import ForgotPasswordFormFeature from './features/ForgotPasswordFormFeature'

function ForgotPasswordPage() {
    return (
        <AuthContainer title='Forgot Password'>
            <ForgotPasswordFormFeature />
        </AuthContainer>
    )
}

export default ForgotPasswordPage