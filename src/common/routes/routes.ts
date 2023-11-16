import { lazy } from 'react'

// const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const LoginPage = lazy(() => import('../../app/auth/login'))
const RegisterPage = lazy(() => import('../../app/auth/register'))
const ForgotPasswordPage = lazy(
    () => import('../../app/auth/forgotPassword')
)
const OtpPage = lazy(() => import('../../app/auth/otp'))
const LayoutContainer = lazy(() => import('../containers/LayoutContainer'))
const DashBoardPage = lazy(() => import('../../app/admin/dashboard'))

export const routes = {
    login: {
        path: '/login',
        component: LoginPage
    },
    forgotPassword: {
        path: '/forgot-password',
        component: ForgotPasswordPage
    },
    register: {
        path: '/register',
        component: RegisterPage
    },
    otp: {
        path: '/otp',
        component: OtpPage
    },
    layout: {
        path: '/app/*',
        component: LayoutContainer
    },
    admin: {
        dashboard: {
            path: '/dashboard',
            fullPath: '/app/dashboard',
            component: DashBoardPage
        }
    }
}
