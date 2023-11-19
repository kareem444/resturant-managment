import { FC, Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { NestedRoutes } from '../routes/routes';

const SplashScreenComponent = lazy(() => import('../components/SplashScreenComponent'))
const Error404Component = lazy(() => import('../components/Error404Component'))

interface SetRoutesContainerProps {
    routes: NestedRoutes;
}

const SetRoutesContainer: FC<SetRoutesContainerProps> = ({ routes }) => {
    const [routesElements, setRoutesElements] = useState(
        [] as { path: string; component: any }[]
    )

    useEffect(() => {
        for (const key in routes) {
            const path = routes[key as keyof typeof routes].path
            const component = routes[key as keyof typeof routes].component
            setRoutesElements((old: any) => [...old, { path, component }])
        }
    }, [routes])

    return (
        <Suspense fallback={<SplashScreenComponent />}>
            <Routes>
                {routesElements.map((route, key) => {
                    return (
                        <Route
                            key={key}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })}
                {/* Redirecting unknown url to 404 page */}
                <Route
                    path='*'
                    element={
                        routesElements.length ? (
                            <Error404Component />
                        ) : (
                            <SplashScreenComponent />
                        )
                    }
                />
            </Routes>
        </Suspense>
    )
};

export default SetRoutesContainer;
