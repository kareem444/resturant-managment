import { FC, useEffect, useState } from 'react'

interface AccordionComponentProps {
    data: {
        title: string
        component: JSX.Element
    }[]
    firstChildFocus?: boolean
    isToggle?: boolean
    isClickable?: boolean
    className?: string
    openSectionWithSectionNumber?: number
    onChange?: (index: number) => void
}

const AccordionComponent: FC<AccordionComponentProps> = ({
    data,
    firstChildFocus = true,
    isToggle = false,
    isClickable = true,
    className,
    openSectionWithSectionNumber,
    onChange
}) => {
    const [index, setIndex] = useState(firstChildFocus ? 1 : 0)

    const handelOnCLick = (i: number) => {
        if (!isClickable) return
        if (isToggle) {
            setIndex(index == i + 1 ? 0 : i + 1)
        } else {
            setIndex(i + 1)
        }
        onChange?.(i + 1)
    }

    useEffect(() => {
        if (openSectionWithSectionNumber) {
            if (index != openSectionWithSectionNumber) {
                setIndex(openSectionWithSectionNumber)
            }
        }
    }, [openSectionWithSectionNumber])

    return (
        <>
            {data.map((item, i) => (
                <div
                    key={i}
                    className={
                        'collapse border border-base-300 bg-white rounded-2xl mb-2' +
                        ` ${data.length > 1 && 'collapse-plus'} ` +
                        className
                    }
                >
                    <input
                        type='checkbox'
                        checked={index == i + 1}
                        onClick={() => handelOnCLick(i)}
                        onChange={() => { }}
                    />
                    <div className='collapse-title text-xl font-medium'>{item.title}</div>
                    <div className='collapse-content'>{item.component}</div>
                </div>
            ))}
        </>
    )
}

export default AccordionComponent
