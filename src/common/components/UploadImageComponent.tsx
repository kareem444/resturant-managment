import { ChangeEvent, FC, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'

interface UploadImageComponentProps {
    field?: ControllerRenderProps<any, string>
    className?: string
    onFileChange?: (file: File | null) => void
}

const UploadImageComponent: FC<UploadImageComponentProps> = ({
    field,
    className,
    onFileChange
}) => {
    const [file, setFile] = useState<File | null>(null)

    const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null)
        if (field) {
            field?.onChange(e.target.files ? e.target.files[0] : null)
        }
        if (onFileChange) {
            onFileChange(e.target.files ? e.target.files[0] : null)
        }
    }

    return (
        <div
            className={
                'h-20 w-20 border dark:border-gray-500 rounded-xl flex relative cursor-pointer m-auto' +
                ' ' +
                className
            }
        >
            <input
                type='file'
                accept='image/*'
                onChange={handelOnChange}
                className='h-full w-full cursor-pointer absolute z-10 bottom-0.5 left-1 opacity-0'
                style={{ fontSize: 0 }}
            />
            {file ? (
                <img
                    src={URL.createObjectURL(file)}
                    alt='upload'
                    className='h-full w-full rounded-xl'
                />
            ) : (
                <i className='fi fi-rr-picture m-auto text-4xl dark:text-gray-500' />
            )}
        </div>
    )
}

export default UploadImageComponent
