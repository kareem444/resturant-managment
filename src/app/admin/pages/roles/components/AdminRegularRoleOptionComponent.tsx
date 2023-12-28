import { FC, useEffect, useState } from 'react'
import CheckBoxComponent from 'src/common/components/CheckBoxComponent'
import { removeDashFromRoutNameHelper } from 'src/common/helper/routesHelper'

interface Props {
    items?: string[]
    onResult?: (result: { [key: string]: boolean }) => void
}

const AdminRegularRoleOptionComponent: FC<Props> = ({ items, onResult }) => {
    const [result, setResult] = useState<{ [key: string]: boolean }>()

    useEffect(() => {
        items?.forEach((value) => {
            setResult(
                pre => ({
                    ...pre,
                    [removeDashFromRoutNameHelper(value)]: false
                })
            )
        })
    }, [])

    useEffect(() => {
        if (result) {
            onResult?.(result)
        }
    }, [result])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3'>
            {items?.map((item, index) => (
                <CheckBoxComponent
                    key={index}
                    label={item}
                    className=''
                    onChange={val => {
                        setResult(pre => ({
                            ...pre,
                            [removeDashFromRoutNameHelper(item)]: val
                        }))
                    }}
                />
            ))}
        </div>
    )
}

export default AdminRegularRoleOptionComponent
