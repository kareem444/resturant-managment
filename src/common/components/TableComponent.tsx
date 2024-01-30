import React, { useEffect, useState } from 'react'
import { TableButtonsComponent } from './IconsButtonsComponent'
import DraggableItemComponent from './DraggableItemComponent'

export interface ITableContent {
    header: string[]
    filter?: string[]
    showFilterDropDown?: boolean
    defaultFilterItem?: string
    items: any[]
    selectors: any
    avatarSelector?: any
    nameSelector?: any
    isDraggable?: boolean
    maxStringLength?: number
    onDrag?: (item: any) => void
    buttons?: {
        onEdit?: (item: any) => void
        onDelete?: (item: any) => void
        onPrint?: (item: any) => void
        onLock?: (item: any) => void
        switch?: {
            defaultValue?: boolean
            defaultValueSelector?: (item: any) => boolean
            onSwitch?: (value: boolean, item: any) => void
        }
    },
}

export const TableComponent: React.FC<ITableContent> = ({
    header,
    items,
    selectors,
    avatarSelector,
    nameSelector,
    buttons,
    isDraggable = false,
    onDrag,
    maxStringLength = 20,
}) => {
    const [dragResult, setDragResult] = useState<[any, any]>([null, null])

    useEffect(() => {
        if (
            isDraggable &&
            dragResult[1] != null &&
            dragResult[0] != null &&
            dragResult[0] !== dragResult[1]
        ) {
            onDrag && onDrag(dragResult)
        }
    }, [dragResult[0], dragResult[1]])

    const handelButtons = (item: any) => {
        if (buttons) {
            if (buttons.switch) {
                if (buttons.switch.defaultValueSelector) {
                    buttons.switch.defaultValue = buttons.switch.defaultValueSelector(item)
                }
            }
            return buttons
        }
    }

    return (
        <div className='overflow-x-auto w-full no-scrollbar overflow-y-scroll h-full'>
            <table className='table w-full'>
                <thead>
                    <tr>
                        {isDraggable && <td></td>}
                        {header.map((h, k) => {
                            return (
                                <td key={k} className='text-left !z-0'>
                                    {h}
                                </td>
                            )
                        })}
                        {(buttons && Object.keys(buttons).length > 0) && <td></td>}
                    </tr>
                </thead>
                <tbody>
                    {items?.map((l, k) => {
                        return (
                            <DraggableItemComponent
                                key={k}
                                ContainerWrapper={'tr'}
                                DragButtonWrapper={'td'}
                                item={k}
                                isDraggable={isDraggable}
                                setDragResult={setDragResult}
                            >
                                {(avatarSelector || nameSelector) && (
                                    <td>
                                        <div className='flex items-center space-x-3'>
                                            {avatarSelector && (
                                                <div className='avatar'>
                                                    <div className='mask mask-circle w-12 h-12'>
                                                        <img src={avatarSelector(l)} alt='Avatar' />
                                                    </div>
                                                </div>
                                            )}
                                            {nameSelector && (
                                                <div>
                                                    <div className='font-bold'>{nameSelector(l)}</div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                )}
                                {Object.keys(selectors).map((key, index) => {
                                    let value = selectors[key](l)
                                    if (value.length > maxStringLength) {
                                        value = value.substring(0, maxStringLength) + '...'
                                    }
                                    // @ts-ignore
                                    return <td key={index}>{value}</td>
                                })}
                                {(buttons && Object.keys(buttons).length > 0) && (
                                    <td >
                                        <div className='flex justify-end'>
                                            <TableButtonsComponent {...handelButtons(l)} item={l} />
                                        </div>
                                    </td>
                                )}
                            </DraggableItemComponent>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}
