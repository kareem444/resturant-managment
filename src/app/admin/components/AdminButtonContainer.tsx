import { FC } from 'react'

export interface AdminButtonContainerProps {
    buttonClassName?: string
    containerClassName?: string
    text?: string
    icon?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

const AdminButtonComponent: FC<AdminButtonContainerProps> = ({
    buttonClassName,
    containerClassName,
    text,
    icon,
    onClick,
    type = 'button'
}) => {
    return (
        <div className={`flex justify-center ${containerClassName}`}>
            <button
                type={type}
                className={`btn btn-info text-white bg-cyan-500 w-1/3 mt-5 flex ${!!icon && 'justify-between'
                    } ${buttonClassName}`}
                onClick={onClick}
            >
                {text}
                {icon && <i className={`fi ${icon} mx-2`}></i>}
            </button>
        </div>
    )
}

export default AdminButtonComponent
