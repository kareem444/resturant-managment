import { FC } from 'react'
import { useTranslate } from '../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../common/constants/TranslateConstants'

interface AdminItemsBoxComponentProps {
    title?: string
    items?: any[]
    selector?: (item: any) => string
    showDeleteAllIcon?: boolean
    onDeleteAll?: () => void
    onDeleteItem?: (item: any, index: number) => void
}

const AdminItemsBoxComponent: FC<AdminItemsBoxComponentProps> = ({
    title,
    items,
    showDeleteAllIcon = true,
    selector,
    onDeleteAll,
    onDeleteItem
}) => {
    const { translate } = useTranslate()
    return (
        <div className='h-full flex flex-col'>
            {(showDeleteAllIcon || title) && (
                <div className='mt-1 mb-2 flex justify-between'>
                    {title && (
                        <h3 className=''>
                            {title} ({items?.length ?? 0})
                        </h3>
                    )}
                    {showDeleteAllIcon && (
                        <i
                            className='fi fi-br-trash cursor-pointer hover:text-red-500 mt-1'
                            onClick={onDeleteAll}
                        ></i>
                    )}
                </div>
            )}
            <div className='overflow-y-scroll no-scrollbar border rounded-lg p-2 flex-1'>
                {!items?.length && (
                    <div className='flex flex-col items-center justify-center h-full'>
                        <i className='fi fi-br-plus'></i>
                        <span className='mt-2'>{`${translate(TRANSLATE.NO_ITEMS)}`}</span>
                    </div>
                )}

                {items?.map((item, index) => (
                    <div key={index}>
                        <div className='flex justify-between'>
                            <span>
                                {index + 1}.{' '}
                                <span className='font-bold'>
                                    {selector ? selector(item) : item}
                                </span>
                            </span>
                            <i className='fi fi-br-cross-small mt-1 cursor-pointer hover:text-red-500'
                                onClick={() => !!onDeleteItem && onDeleteItem(item, index)}
                            ></i>
                        </div>
                        {index !== items.length - 1 && <div className='divider my-0'></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminItemsBoxComponent
