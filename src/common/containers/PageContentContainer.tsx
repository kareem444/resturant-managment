import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from "react"
import SplashScreenComponent from '../components/SplashScreenComponent'
import { routes } from '../routes/routes'
import HeaderContainer from './HeaderContainer'

const Error404Component = lazy(() => import('../components/Error404Component'))

function PageContentContainer() {
    const mainContentRef = useRef(null);
    // const { pageTitle } = useSelector(state => state.header)


    // Scroll back to top on new page load
    // useEffect(() => {
    //     mainContentRef.current && mainContentRef.current!.scroll({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // }, [pageTitle])

    const [routesElements, setRoutesElements] = useState([] as { path: string, component: any }[])
    useEffect(() => {
        for (const key in routes.admin) {
            const path = routes.admin[key as keyof typeof routes.admin].path
            const component = routes.admin[key as keyof typeof routes.admin].component
            setRoutesElements((old: any) => [...old, { path, component }])
        }
    }, [routes.admin])

    return (
        <div className="drawer-content flex flex-col ">
            <HeaderContainer />
            <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200" ref={mainContentRef}>
                <Suspense fallback={<SplashScreenComponent />}>
                    <Routes>
                        {
                            routesElements.map((route, key) => {
                                return (
                                    <Route
                                        key={key}
                                        path={route.path}
                                        element={<route.component />}
                                    />
                                )
                            })
                        }
                        {/* Redirecting unknown url to 404 page */}
                        <Route path="*" element={routesElements.length ? <Error404Component /> : <SplashScreenComponent />} />
                    </Routes>
                </Suspense>
                <div className="h-16"></div>
            </main>
        </div>
    )
}


export default PageContentContainer
