import NumpadComponent from 'src/common/components/NumpadComponent'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from 'src/common/routes/routes'

const AuthSignUserEnterPasswordFeature = () => {
    const [result, setResult] = useState('')
    const navigate = useNavigate()

    const handelOnClick = () => {
        navigate(routes.admin.dashboard.fullPath)
    }

    return (
        <div
            className='card mx-auto w-full sm:max-w-lg md:max-w-md px-4 py-3 mt-3'
            style={{ boxShadow: '1px 1px 5px #838383D5' }}
        >
            <NumpadComponent
                resultClassName='border text-center'
                buttonClassName='border h-20'
                onChange={value => setResult(value)}
            />
            <button
                className='btn btn-ghost border border-gray-200 h-16'
                onClick={handelOnClick}
            >
                Sync Users
            </button>
        </div>
    )
};

export default AuthSignUserEnterPasswordFeature;
