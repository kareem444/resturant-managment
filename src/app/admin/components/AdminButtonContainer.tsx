import { FC } from 'react';

export interface AdminButtonContainerProps {
    buttonClassName?: string
    text?: string
    icon?: string
    onClick?: () => void
    disabled?: boolean
    isLoading?: boolean
    type?: 'button' | 'submit' | 'reset',
}

const AdminButtonComponent: FC<AdminButtonContainerProps> = ({
    buttonClassName,
    text,
    icon,
    onClick,
    type = 'button',
    disabled = false,
    isLoading = false,
}) => {
    return (
        <button
            disabled={disabled || isLoading}
            type={type}
            className={
                'btn btn-ghost text-white bg-blue-600 hover:!bg-blue-700 w-full flex normal-case ' +
                ((!!icon && !isLoading) ? ' justify-between ' : "") +
                buttonClassName +
                (isLoading ? ' loading ' : '')
            }
            onClick={onClick}
        >
            {!isLoading && (
                <>
                    {icon && <i className={`fi ${icon} mx-2`}></i>}
                    {text}
                </>
            )}
        </button>
    );
};

export default AdminButtonComponent;
