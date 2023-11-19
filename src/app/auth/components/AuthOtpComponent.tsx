import { useState, useRef, useEffect } from 'react'

export default function OtpComponent(props: {
    styleClasses?: string
    numberOfInputs: number
    onComplete?: any
    onChange?: any
}) {
    const [otp, setOtp] = useState(Array(props.numberOfInputs ?? 4).fill(''))
    const inputRefs = useRef<HTMLInputElement[]>(new Array(props.numberOfInputs).fill(null));

    useEffect(() => {
        const otpValue = otp.join('')
        props.onChange(otpValue)
        if (otpValue.length === props.numberOfInputs && props.onComplete) {
            props.onComplete(otpValue)
        }
    }, [otp])

    const handleChange = (index: number, event: any) => {
        const value = event.target.value

        setOtp(prevOtp => {
            const newOtp = [...prevOtp]

            newOtp[index] = value.substring(value.length - 1, value.length)

            // Move focus to the next input if available
            if (index < props.numberOfInputs - 1 && value !== '') {
                inputRefs.current[index + 1].focus()
            }

            return newOtp
        })
    }

    const handleKeyDown = (index: number, event: any) => {
        // Move focus to the previous input if the backspace key is pressed on an empty input
        if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus()
        }
    }

    return (
        <div className={'flex gap-3 flex-row items-center justify-between mx-auto w-full max-w-xs ' + props.styleClasses}>
            {otp.map((value, index) => (
                <div className='w-full h-16' key={index}>
                    <input
                        className='text-black font-bold w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-xl bg-white'
                        type='number'
                        maxLength={1}
                        min={0}
                        max={9}
                        value={value}
                        onChange={e => handleChange(index, e)}
                        onKeyDown={e => handleKeyDown(index, e)}
                        ref={el => (inputRefs.current[index] = el as HTMLInputElement)}
                    />
                </div>
            ))}
        </div>
    )
}
