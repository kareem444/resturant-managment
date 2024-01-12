import AuthContainer from '../../containers/AuthContainer'
import LoginFormFeature from './features/LoginFormFeature'

function LoginPage() {
    return (
        <AuthContainer title='Login to your account'>
            <LoginFormFeature />
        </AuthContainer>
    )
}

export default LoginPage