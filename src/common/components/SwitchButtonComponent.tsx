import { FC, useState } from 'react'

interface SwitchButtonComponentProps {
    label?: {
        title: string
        labelStyle?: string
    }
    containerStyle?: string
    defaultValue: boolean
    onSwitch: ({ name, value }: { name: string; value: any }) => void
    name: string
}

const SwitchButtonComponent: FC<SwitchButtonComponentProps> = ({
    label,
    containerStyle,
    defaultValue = false,
    onSwitch,
    name
}) => {
    const [value, setValue] = useState(defaultValue)

    const updateToggleValue = () => {
        setValue(!value)
        onSwitch({ name, value: !value })
    }

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className='label cursor-pointer'>
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
        </div>
    )
}

export default SwitchButtonComponent
