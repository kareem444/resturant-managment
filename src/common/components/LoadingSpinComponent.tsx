import { FC } from 'react'

interface LoadingSpinComponentProps {
    size?: string
    width?: string
    className?: string
}

const LoadingSpinComponent: FC<LoadingSpinComponentProps> = ({
    size = '4',
    width = '2',
    className
}) => {
    return (
        <span
            className={
                `inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]` +
                ` ${className} ` +
                `h-${size} w-${size} border-${width}`
            }
        ></span>
    )
}

export default LoadingSpinComponent
