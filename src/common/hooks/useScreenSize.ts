import { useState, useEffect } from 'react';

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IScreenSiz {
    size: ScreenSize;
    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
}

const useScreenSize = (): IScreenSiz => {
    const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize);

    function getScreenSize(): ScreenSize {
        const width = window.innerWidth;

        if (width < 640) {
            return 'xs';
        } else if (width >= 640 && width < 768) {
            return 'sm';
        } else if (width >= 768 && width < 1024) {
            return 'md';
        } else if (width >= 1024 && width < 1280) {
            return 'lg';
        } else {
            return 'xl';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        size: screenSize,
        isXs: screenSize === 'xs',
        isSm: screenSize === 'sm' || screenSize === 'xs',
        isMd: screenSize === 'md' || screenSize === 'sm' || screenSize === 'xs',
        isLg: screenSize === 'lg' || screenSize === 'md' || screenSize === 'sm' || screenSize === 'xs',
        isXl: screenSize === 'xl' || screenSize === 'lg' || screenSize === 'md' || screenSize === 'sm' || screenSize === 'xs',
    };
};

export default useScreenSize;
