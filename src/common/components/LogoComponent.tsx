import { FC } from 'react'
import { IMAGE_SRC } from '../constants/SrcConstants'

interface ILogoComponentProps {
    className?: string
}

const LogoComponent: FC<ILogoComponentProps> = ({ className = 'w-41' }) => {
    return (
        <>
            <img src={IMAGE_SRC.logo} className={` ${className}`} />
        </>
    )
}

export default LogoComponent
