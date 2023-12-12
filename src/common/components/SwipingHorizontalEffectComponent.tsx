import useSwipeEvents from 'beautiful-react-hooks/useSwipeEvents'
import { FC, useRef, useState } from 'react'

const calculateBgWidth = (alphaX: number) => {
    const rangeStart = 50
    const rangeEnd = 100
    const widthValues = [0, 2, 4, 6, 8, 10]
    const alphaXInRange =
        Math.min(Math.max(alphaX, -rangeEnd), rangeEnd) - rangeStart
    const step = (rangeEnd - rangeStart) / (widthValues.length - 1)
    const index = Math.floor(alphaXInRange / step)
    return widthValues[index]
}

interface SwipingHorizontalEffectComponentProps {
    children: React.ReactNode
    onSwipeFromLeft?: () => void
    onSwipeFromRight?: () => void
}

const SwipingHorizontalEffectComponent: FC<
    SwipingHorizontalEffectComponentProps
> = ({ children, onSwipeFromLeft, onSwipeFromRight }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { onSwipeLeft, onSwipeRight, onSwipeMove, onSwipeEnd } =
        useSwipeEvents(ref)

    const [isSwipingFromRight, setIsSwipingFromRight] = useState(false)
    const [isSwipingFromLeft, setIsSwipingFromLeft] = useState(false)
    const [bgWidth, setBgWidth] = useState<number>(0)

    onSwipeMove(e => {
        const alphaX = e.alphaX
        if (alphaX > 50 && alphaX <= 100) {
            setIsSwipingFromLeft(true)
            setIsSwipingFromRight(false)
            setBgWidth(calculateBgWidth(alphaX))
        } else if (alphaX < -50 && alphaX >= -100) {
            setIsSwipingFromRight(true)
            setIsSwipingFromLeft(false)
            setBgWidth(calculateBgWidth(-alphaX))
        }
    })

    onSwipeEnd(() => {
        setIsSwipingFromLeft(false)
        setIsSwipingFromRight(false)
        setBgWidth(0)
    })

    onSwipeLeft(() => {
        onSwipeFromLeft && onSwipeFromLeft()
    })

    onSwipeRight(() => {
        onSwipeFromRight && onSwipeFromRight()
    })

    return (
        <div className='flex' ref={ref}>
            {isSwipingFromRight && (
                <div
                    className={`bg-cyan-500 opacity-20 rounded-lg w-${bgWidth} transition-all duration-150`}
                ></div>
            )}
            {children}
            {isSwipingFromLeft && (
                <div
                    className={`bg-cyan-500 opacity-20 rounded-lg w-${bgWidth} transition-all duration-150`}
                ></div>
            )}
        </div>
    )
}

export default SwipingHorizontalEffectComponent
