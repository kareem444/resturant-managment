import { FC } from "react";

interface ErrorComponentProps {
    message?: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
    return (
        <>
            <i className='fi fi-rr-exclamation text-7xl text-gray-400'></i>
            <p className='text-gray-400 mt-4'>
                <span className='text-red-500 font-bold'>Error: </span>
                {message || 'Something went wrong'}
            </p>
        </>
    )
};

export default ErrorComponent;
