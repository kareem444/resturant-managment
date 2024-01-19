import { FC } from 'react'

export interface AdminButtonContainerProps {
    buttonClassName?: string
    containerClassName?: string
    text?: string
    icon?: string
    onClick?: () => void
    disabled?: boolean
    isLoading?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const AdminButtonComponent: FC<AdminButtonContainerProps> = ({
    buttonClassName = '',
    containerClassName,
    text,
    icon,
    onClick,
    type = 'button',
    disabled = false,
    isLoading = false
}) => {
    return (
        <div className={`flex justify-center ${containerClassName}`}>
            <button
                disabled={disabled || isLoading}
                type={type}
                className={
                    'btn btn-info text-white bg-cyan-500 w-1/3 mt-5 flex ' +
                    ((!!icon && !isLoading) && ' justify-between ') +
                    buttonClassName +
                    (isLoading ? ' loading ' : '')
                }
                onClick={onClick}
            >
                {!isLoading && (
                    <>
                        {text}
                        {icon && <i className={`fi ${icon} mx-2`}></i>}
                    </>
                )}
            </button>
        </div>
    )
}

export default AdminButtonComponent
