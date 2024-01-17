import { FC, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../routes/routes'
import { onAuthStateChanged } from 'firebase/auth'
import { fireAuth } from '../config/firebase'
import SplashScreenComponent from './SplashScreenComponent'

const AuthGuardComponent = ({
    children,
    notAuthGuard = true
}: {
    children: JSX.Element
    notAuthGuard?: boolean
}) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null)

    const pathToRedirect = notAuthGuard ? routes.signUser.path : routes.login.path

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(fireAuth, user => {
            if (user) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        })
        return () => unsubscribe()
    }, [])

    if (isAuth === null) {
        return <SplashScreenComponent />
    }

    if (isAuth && notAuthGuard) {
        return <Navigate to={pathToRedirect} />
    }

    if (!isAuth && !notAuthGuard) {
        return <Navigate to={pathToRedirect} />
    }

    return <>{children}</>
}

interface GuardedRouteComponentProps {
    children: JSX.Element
    guard?: boolean
    authGuard?: boolean
    notAuthGuard?: boolean
    pathToRedirect?: string
}

const GuardedRouteComponent: FC<GuardedRouteComponentProps> = ({
    children,
    guard = true,
    authGuard = false,
    notAuthGuard = false,
    pathToRedirect = routes.login.path
}) => {
    if (authGuard || notAuthGuard)
        return (
            <AuthGuardComponent notAuthGuard={notAuthGuard}>{children}</AuthGuardComponent>
        )
    return <>{guard ? children : <Navigate to={pathToRedirect} />}</>
}

export default GuardedRouteComponent
