import { Link } from 'react-router-dom'
import ErrorTextComponent from '../../../common/components/ErrorTextComponent'
import { FormEvent, useState } from 'react'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export default function AuthFormContainer(props: {
    onFormSubmit: SubmitHandler<any> | any
    errorMessage?: string
    children: any
    handelSubmit?: UseFormHandleSubmit<any, undefined>
    inputsContainerClassName?: string
    buttonText?: string
    isLoading?: boolean
    navigate: {
        text: string
        link: {
            path: string
            text: string
        }
    }
}) {
    // const [loading, setLoading] = useState(false)

    const handelSubmit: SubmitHandler<any> = (e: any) => {
        // setLoading(true)
        props.onFormSubmit && props.onFormSubmit(e)
        // setLoading(false)
    }

    const handelSubmitWithOutValidation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setLoading(true)
        props.onFormSubmit && props.onFormSubmit()
        // setLoading(false)
    }

    return (
        <>
            <form
                onSubmit={
                    props.handelSubmit
                        ? props.handelSubmit(handelSubmit)
                        : e => handelSubmitWithOutValidation(e)
                }
            >
                <div className={`mb-4 ${props.inputsContainerClassName}`}>{props.children}</div>

                {props.errorMessage && (
                    <ErrorTextComponent styleClass='mt-8'>
                        {props.errorMessage}
                    </ErrorTextComponent>
                )}

                <button
                    type='submit'
                    className={
                        'btn mt-4 w-full btn-info text-white hover:bg-cyan-600 bg-cyan-500' +
                        (props.isLoading ? ' loading !bg-cyan-800' : '')
                    }
                >
                    {props.buttonText ?? 'Submit'}
                </button>

                <div className='text-center mt-4'>
                    {props.navigate.text}
                    <Link to={props.navigate.link.path}>
                        <span className=' inline-block m-1  hover:text-primary hover:underline hover:cursor-pointer transition duration-200'>
                            {props.navigate.link.text}
                        </span>
                    </Link>
                </div>
            </form>
        </>
    )
}
