import { FC, useEffect, useState } from 'react'

interface CheckBoxComponentProps {
    className?: string
    classNameOnDisabled?: string
    label?: string
    checked?: boolean
    onChange?: (value: boolean) => void
    disabled?: boolean
}

const CheckBoxComponent: FC<CheckBoxComponentProps> = ({
    className,
    classNameOnDisabled,
    label,
    checked,
    onChange,
    disabled = false
}) => {
    const [isChecked, setIsChecked] = useState(checked || false)

    useEffect(() => {
        setIsChecked(checked || false)
    }, [checked])

    return (
        <label
            className={
                'label cursor-pointer justify-start gap-2 ' +
                ' ' +
                className +
                ' ' +
                (disabled ? classNameOnDisabled : '')
            }
        >
            <input
                type='checkbox'
                className='checkbox'
                checked={isChecked}
                disabled={disabled}
                onChange={() => {
                    setIsChecked(!isChecked)
                    if (onChange) onChange(!isChecked)
                }}
            />
            {!!label && <span className='label-text'>{label}</span>}
        </label>
    )
}

export default CheckBoxComponent
