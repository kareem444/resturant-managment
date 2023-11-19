import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

export default function SwitchThemeComponent() {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme')
    )

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                setCurrentTheme('dark')
            } else {
                setCurrentTheme('light')
            }
        }
        // 👆 false parameter is required for react project
    }, [])

    return (
        <label className='swap pointer-events-auto'>
            <input type='checkbox' />
            <SunIcon
                data-set-theme='light'
                data-act-class='ACTIVECLASS'
                className={
                    'fill-current w-6 h-6 ' +
                    (currentTheme === 'dark' ? 'swap-on' : 'swap-off')
                }
            />
            <MoonIcon
                data-set-theme='dark'
                data-act-class='ACTIVECLASS'
                className={
                    'fill-current w-6 h-6 ' +
                    (currentTheme === 'light' ? 'swap-on' : 'swap-off')
                }
            />
        </label>
    )
}
