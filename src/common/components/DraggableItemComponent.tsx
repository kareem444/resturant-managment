import React, { ElementType, FC, useState } from 'react'

interface IDraggableItemComponentProps {
    children?: React.ReactNode
    ContainerWrapper?: ElementType
    DragButtonWrapper?: ElementType
    isDraggable?: boolean
    item?: any
    onStartDrag?: (item: any) => void
    onEndDrag?: (item: any) => void
    className?: string
    dragoverClassName?: string
    setDragResult?: (result: any) => void
}

const DraggableItemComponent: FC<IDraggableItemComponentProps> = ({
    children,
    ContainerWrapper = 'div',
    DragButtonWrapper = 'div',
    isDraggable = true,
    item,
    onStartDrag,
    onEndDrag,
    setDragResult,
    className = '',
    dragoverClassName = 'text-accent'
}) => {
    const [startDraggable, setStartDraggable] = useState(false)
    const [isDragOver, setIsDragOver] = useState(false)

    return (
        <ContainerWrapper
            draggable={isDraggable && startDraggable}
            onDragStart={(e: any) => {
                e.dataTransfer.setData('text/plain', '');
                isDraggable && onStartDrag && onStartDrag(item)
                isDraggable && setDragResult && setDragResult([item, null])
            }}
            onDragOver={(e: any) => {
                e.preventDefault()
                isDraggable && setIsDragOver(true)
            }}
            onDragLeave={(e: any) => {
                e.preventDefault()
                isDraggable && setIsDragOver(false)
            }}
            onDrop={(e: any, t: any) => {
                e.preventDefault()
                isDraggable && setIsDragOver(false)
                isDraggable && setDragResult && setDragResult((prev: any) => [prev[0], item])
                isDraggable && onEndDrag && onEndDrag(item)
            }}
            className={className + ' ' + (isDragOver ? dragoverClassName : '')}
        >
            {isDraggable && (
                <DragButtonWrapper>
                    <i
                        className='fi fi-rr-apps-sort'
                        onMouseDown={() => setStartDraggable(true)}
                        onMouseLeave={() => setStartDraggable(false)}
                    ></i>
                </DragButtonWrapper>
            )}
            {children}
        </ContainerWrapper>
    )
}

export default DraggableItemComponent
