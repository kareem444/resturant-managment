import RegisterFormFeature from './features/RegisterFormFeature'
import AuthContainer from '../../containers/AuthContainer'

export default function RegisterPage() {
    return (
        <AuthContainer title='Register to your account'>
            <RegisterFormFeature />
        </AuthContainer>
    )
}
