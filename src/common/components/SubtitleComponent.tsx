import { FC } from 'react'

interface SubtitleProps {
    styleClass?: string
    children: React.ReactNode
}

const SubtitleComponent: FC<SubtitleProps> = ({ styleClass, children }) => {
    return <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
}

export default SubtitleComponent
