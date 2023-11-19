import React, { FC, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode
}

const ScrollToTopComponent: FC<Props> = ({ children }) => {
    const mainContentRef = useRef(null);
    const { pathname } = useLocation()

    useEffect(() => {
        mainContentRef.current && (mainContentRef.current as any).scroll({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname])

    return (
        <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200" ref={mainContentRef}>
            {children}
        </main>
    )
};

export default ScrollToTopComponent;
