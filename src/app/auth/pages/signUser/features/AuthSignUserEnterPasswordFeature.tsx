import NumpadComponent from 'src/common/components/NumpadComponent'
import { useState } from 'react'
import { AuthService } from 'src/app/auth/services/AuthService';
import useMutate from 'src/common/DataHandler/hooks/server/useMutate';
import { NOTIFICATION_TYPE, showNotification } from 'src/common/components/ShowNotificationComponent';
import { ILocalCurrentUserModel } from 'src/app/auth/models/local/AuthLocalModel';
import useCurrentUser from 'src/common/hooks/useCurrentUser';

const AuthSignUserEnterPasswordFeature = () => {
    const [result, setResult] = useState('')
    const { setCurrentUser } = useCurrentUser()

    const { mutate, isLoading } = useMutate({
        queryFn: AuthService.signUser, options: {
            onSuccess: (currentUser: ILocalCurrentUserModel) => {
                setCurrentUser (currentUser)
            },
            onError(formattedError) {
                showNotification(NOTIFICATION_TYPE.ERROR, formattedError?.message ?? 'Something went wrong')
            },
        }
    })

    const handelOnClick = () => mutate(result)

    return (
        <div
            className='card mx-auto w-full sm:max-w-lg md:max-w-md px-4 py-3 mt-3'
            style={{ boxShadow: '1px 1px 5px #838383D5' }}
        >
            <NumpadComponent
                resultClassName='border text-center'
                buttonClassName='border h-20'
                onChange={value => setResult(value)}
                isSecured={true}
                allowZeroAtFirst={true}
                placeHolder='**'
            />
            <button
                className={'btn btn-ghost border border-gray-200 h-16 ' + (isLoading ? 'loading' : '')}
                onClick={handelOnClick}
                disabled={isLoading}
            >
                Sync Users
            </button>
        </div>
    )
};

export default AuthSignUserEnterPasswordFeature;
