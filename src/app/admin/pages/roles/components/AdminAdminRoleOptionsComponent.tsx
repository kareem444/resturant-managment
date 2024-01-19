import { FC, useEffect, useState } from 'react'
import CheckBoxComponent from 'src/common/components/CheckBoxComponent'
import { IRolesOptions } from '../interfaces/AdminRoleInterface'

export interface AdminRoleOptionsComponentProps {
    title?: string
    showDivider?: boolean
    onResult?: (result: IRolesOptions) => void
    enableOnlyAccessButton?: boolean
}

const RoleOptionsComponent: FC<AdminRoleOptionsComponentProps> = ({
    title,
    showDivider = false,
    onResult,
    enableOnlyAccessButton = false
}) => {
    const [isCanAccess, setIsCanAccess] = useState(true)

    const [result, setResult] = useState<IRolesOptions>({
        access: isCanAccess,
        add: false,
        edit: false,
        delete: false
    })

    useEffect(() => {
        if (onResult) {
            onResult(result)
        }
    }, [result])

    return (
        <>
            <div className={`grid grid-cols-2 sm:grid-cols-5`}>
                <span className='flex items-center font-bold text-center col-span-2 sm:col-span-1'>
                    {title}
                </span>
                <CheckBoxComponent
                    label='Access'
                    className='md:m-auto'
                    checked={isCanAccess}
                    onChange={val => {
                        setIsCanAccess(val)
                        if (!val) {
                            setResult({
                                ...result,
                                access: val,
                                add: val,
                                edit: val,
                                delete: val
                            })
                        } else {
                            setResult({
                                ...result,
                                access: val
                            })
                        }
                    }}
                />
                <CheckBoxComponent
                    label='Add'
                    className='md:m-auto'
                    classNameOnDisabled='line-through'
                    disabled={enableOnlyAccessButton || !isCanAccess}
                    checked={result.add}
                    onChange={val => {
                        setResult({
                            ...result,
                            add: val
                        })
                    }}
                />
                <CheckBoxComponent
                    label='Edit'
                    className='md:m-auto'
                    classNameOnDisabled='line-through'
                    disabled={enableOnlyAccessButton || !isCanAccess}
                    checked={result.edit}
                    onChange={val => {
                        setResult({
                            ...result,
                            edit: val
                        })
                    }}
                />
                <CheckBoxComponent
                    label='Delete'
                    className='md:m-auto'
                    classNameOnDisabled='line-through'
                    disabled={enableOnlyAccessButton || !isCanAccess}
                    checked={result.delete}
                    onChange={val => {
                        setResult({
                            ...result,
                            delete: val
                        })
                    }}
                />
            </div>
            {showDivider && <div className='divider my-0'></div>}
        </>
    )
}

export default RoleOptionsComponent
