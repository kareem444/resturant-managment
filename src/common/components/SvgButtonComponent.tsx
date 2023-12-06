import { FC } from 'react'
import { useLocation } from 'react-router-dom'

interface SvgButtonComponentProps {
    SvgIcon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined
        }
    >
    activeFillColor?: string
    normalFillColor: string
    activePath?: string
}

const SvgButtonComponent: FC<SvgButtonComponentProps> = ({
    SvgIcon,
    activeFillColor,
    normalFillColor,
    activePath
}) => {
    const { pathname } = useLocation()
    return (
        <SvgIcon
            fill={pathname === activePath ? activeFillColor : normalFillColor}
            className='h-12'
        />
    )
}

export default SvgButtonComponent
