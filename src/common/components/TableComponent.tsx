import React from 'react'
import { TableButtonsComponent } from './IconsButtonsComponent'

export interface ITableContent {
    header: string[]
    items: any[]
    selectors: any
    avatarSelector?: any
    nameSelector?: any
    buttons?: {
        onEdit?: (item: any) => void
        onDelete?: (item: any) => void
        onPrint?: (item: any) => void
        onLock?: (item: any) => void
    }
}

export const TableComponent: React.FC<ITableContent> = ({
    header,
    items,
    selectors,
    avatarSelector,
    nameSelector,
    buttons
}) => {
    return (
        <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
                <thead>
                    <tr>
                        {header.map((h, k) => {
                            return (
                                <th key={k} className='text-left'>
                                    {h}
                                </th>
                            )
                        })}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((l, k) => {
                        return (
                            <tr key={k}>
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
                                    // @ts-ignore
                                    return <td key={index}>{selectors[key](l)}</td>
                                })}
                                {buttons && (
                                    <td>
                                        <TableButtonsComponent {...buttons} item={l} />
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
