import { ReactNode } from 'react'

function ErrorTextComponent(props: { children: ReactNode, styleClass: string }) {
    return (
        <p className={`text-center text-error ${props.styleClass}`}>{props.children}</p>
    )
}

export default ErrorTextComponent