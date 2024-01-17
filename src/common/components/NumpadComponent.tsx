import { FC, useEffect, useState } from 'react'

interface NumpadButtonComponentProps {
    text: string
    className?: string
    onClick: (text: string) => void
}

const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0']

const basicGlassName: string =
    'bg-white text-slate-500 rounded-lg p-3 active:bg-base-200 active:text-slate-500 text-3xl w-full h-full'

const NumpadButtonComponent: FC<NumpadButtonComponentProps> = ({
    text,
    className,
    onClick
}) => {
    const handleClick = () => {
        onClick(text)
    }

    return (
        <div className={'col-span-1'}>
            <button
                className={basicGlassName + ' btn btn-ghost border-gray-200 ' + className}
                onClick={handleClick}
            >
                {text}
            </button>
        </div>
    )
}

interface NumpadComponentProps {
    onChange?: (value: string) => void
    buttonClassName?: string
    className?: string
    resultClassName?: string
    showResult?: boolean
}

const NumpadComponent: FC<NumpadComponentProps> = ({
    onChange,
    buttonClassName,
    className,
    resultClassName,
    showResult = true
}) => {
    const [result, setResult] = useState('')

    const handleClick = (text: string) => {
        if (text === '.' && result.includes('.')) return
        if (text === '0' && result.length === 0) return
        setResult(result + text)
    }

    useEffect(() => {
        onChange && onChange(result)
    }, [result])

    const handleDelete = () => {
        if (result.length === 0) return
        setResult(result.slice(0, -1))
    }

    return (
        <>
            {showResult && (
                <div className='flex justify-end my-2'>
                    <div className={basicGlassName + ' active:bg-white active:text-slate-500 py-2 ' + resultClassName}>
                        {result || '0'}
                    </div>
                </div>
            )}
            <div className='grid grid-cols-3 gap-2 w-full my-2'>
                {items.map((number, index) => (
                    <NumpadButtonComponent
                        key={index}
                        text={number}
                        onClick={handleClick}
                        className={buttonClassName}
                    />
                ))}
                <div className='col-span-1'>
                    <button
                        className={basicGlassName + ' btn btn-ghost border-gray-200 ' + buttonClassName}
                        onClick={handleDelete}
                    >
                        <i className='fi fi-rr-delete'></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NumpadComponent
