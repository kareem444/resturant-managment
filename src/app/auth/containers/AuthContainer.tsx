import { Link } from 'react-router-dom'
import ErrorTextComponent from '../../../common/components/ErrorTextComponent'
import { FormEvent, useState } from 'react'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export default function AuthContainer(props: {
    onFormSubmit: SubmitHandler<any> | any
    errorMessage?: string
    children: any
    handelSubmit?: UseFormHandleSubmit<any, undefined>
    title: string
    buttonText?: string
    navigate: {
        text: string
        link: {
            path: string
            text: string
        }
    }
}) {
    const [loading, setLoading] = useState(false)

    const handelSubmit: SubmitHandler<any> = (e: any) => {
        setLoading(true)
        props.onFormSubmit && props.onFormSubmit(e)
        setLoading(false)
    }

    const handelSubmitWithOutValidation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        props.onFormSubmit && props.onFormSubmit()
        setLoading(false)
    }

    return (
        <>
            <h2 className='text-2xl font-semibold mb-2 text-center'>{props.title}</h2>
            <form
                onSubmit={
                    props.handelSubmit
                        ? props.handelSubmit(handelSubmit)
                        : e => handelSubmitWithOutValidation(e)
                }
            >
                <div className='mb-4'>{props.children}</div>

                {props.errorMessage && (
                    <ErrorTextComponent styleClass='mt-8'>
                        {props.errorMessage}
                    </ErrorTextComponent>
                )}

                <button
                    type='submit'
                    className={
                        'btn mt-5 w-full btn-primary' + (loading ? ' loading' : '')
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
