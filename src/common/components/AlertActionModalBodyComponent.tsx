import { FC } from 'react'

interface AlertActionModalBodyComponentProps {
    text: string
}

const AlertActionModalBodyComponent: FC<AlertActionModalBodyComponentProps> = ({
    text
}) => {
    return <div className='text-center text-2xl'>{text}</div>
}

export default AlertActionModalBodyComponent
