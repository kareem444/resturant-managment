import { FC, useState } from 'react'

interface SwitchButtonComponentProps {
    label?: {
        title: string
        labelStyle?: string
    }
    containerStyle?: string
    defaultValue?: boolean
    onSwitch?: (value: boolean) => void
}

const SwitchButtonComponent: FC<SwitchButtonComponentProps> = ({
    label,
    containerStyle,
    defaultValue = false,
    onSwitch,
}) => {
    const [value, setValue] = useState(defaultValue)

    const updateToggleValue = () => {
        setValue(!value)
        if (onSwitch) {
            onSwitch(!value)
        }
    }

    return (
        <label className={`label cursor-pointer` + `  ` + containerStyle}>
            {label && <span className={'label-text text-base-content ' + label.labelStyle}>
                {label.title}
            </span>}
            <input
                type='checkbox'
                className='toggle'
                checked={value}
                onChange={e => updateToggleValue()}
            />
        </label>
    )
}

export default SwitchButtonComponent
