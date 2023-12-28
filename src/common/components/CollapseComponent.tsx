import { FC } from 'react'

interface CollapseComponentProps {
    children: React.ReactNode
    title: string
    className?: string
}

const CollapseComponent: FC<CollapseComponentProps> = ({
    children,
    title,
    className
}) => {
    return (
        <div
            className={
                'collapse collapse-plus px-2 card w-full bg-base-100 shadow-sm' +
                ' ' +
                className
            }
        >
            <input type='checkbox' />
            <div className='collapse-title text-2xl font-medium px-4'>
                <h3 className='text-lg'>{title}</h3>
            </div>
            <div className='collapse-content overflow-y-scroll no-scrollbar'>{children}</div>
        </div>
    )
}

export default CollapseComponent
