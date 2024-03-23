import { ChangeEvent, FC, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'

export interface UploadFileComponentProps {
    field?: ControllerRenderProps<any, string>
    className?: string
    onFileChange?: (file: File | null) => void
    iconClassName?: string
    disabled?: boolean
    image?: string
}

const UploadFileComponent: FC<UploadFileComponentProps> = ({
    field,
    className,
    onFileChange,
    iconClassName,
    disabled = false,
    image
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
                disabled={disabled}
            />
            {file || image ? (
                <img
                    src={file ? URL.createObjectURL(file) : image}
                    alt='upload'
                    className='h-full w-full rounded-xl object-contain'
                />
            ) : (
                <i className={'fi fi-rr-picture m-auto text-4xl dark:text-gray-500' + ' ' + iconClassName} />
            )}
        </div>
    )
}

export default UploadFileComponent
