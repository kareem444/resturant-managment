import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import SplashScreenComponent from "./SplashScreenComponent";
import { FireBaseConfig } from "../config/firebase";

const AuthGuardComponent = ({
    children,
    authGuard = true,
    notAuthGuard = true,
}: {
    children: JSX.Element;
    authGuard?: boolean;
    notAuthGuard?: boolean;
}) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    const pathToRedirect = notAuthGuard
        ? routes.signUser.path
        : routes.login.path;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FireBaseConfig.fireAuth, (user) => {
            if (user) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });
        return () => unsubscribe();
    }, []);

    if (isAuth === null) {
        return <SplashScreenComponent />;
    }

    if ((!isAuth && authGuard) || (isAuth && notAuthGuard)) {
        return <Navigate to={pathToRedirect} />;
    }

    return <>{children}</>;
};

interface GuardedRouteComponentProps {
    children: JSX.Element;
    guard?: boolean;
    authGuard?: boolean;
    notAuthGuard?: boolean;
    pathToRedirect?: string;
    signUserGuard?: boolean;
}

const GuardedRouteComponent: FC<GuardedRouteComponentProps> = ({
    children,
    guard = true,
    authGuard = false,
    notAuthGuard = false,
    signUserGuard = false,
    pathToRedirect = routes.login.path,
}) => {
    if (authGuard || notAuthGuard) {
        return (
            <AuthGuardComponent authGuard={authGuard} notAuthGuard={notAuthGuard}>
                {children}
            </AuthGuardComponent>
        );
    }

    if (signUserGuard) return <Navigate to={routes.signUser.path} />;

    return <>{guard ? children : <Navigate to={pathToRedirect} />}</>;
};

export default GuardedRouteComponent;
