import { FC } from 'react'

interface IconButtonComponentProps {
    icon: string
    iconClassName?: string
    containerClassName?: string
    onClick: () => void
}

const PosIconButtonComponent: FC<IconButtonComponentProps> = ({
    icon,
    onClick,
    iconClassName,
    containerClassName
}) => {
    return (
        <li onClick={onClick} className={`list-none ${containerClassName}`}>
            <i
                className={`fi ${icon} text-2xl hover:scale-105 active:text-accent-content w-16 h-14 my-3 justify-center m-auto text-white hover:bg-cyan-500 cursor-pointer ${iconClassName}`}
            />
        </li>
    )
}

export default PosIconButtonComponent
