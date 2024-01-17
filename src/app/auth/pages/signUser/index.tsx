import LogoComponent from 'src/common/components/LogoComponent'
import GuardedRouteComponent from 'src/common/components/GuardedRouteComponent'
import AuthSigUserSignOutFeature from './features/AuthSigUserSignOutFeature'
import AuthSignUserEnterPasswordFeature from './features/AuthSignUserEnterPasswordFeature'
import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import {
    APP_INFO_LOCAL_DB_COLLECTIONS,
    AppInfoLocalDB
} from 'src/common/config/localDBConfig'
import { AsyncHelper } from 'src/common/DataHandler/helper/ServerDataHandlerHelper'
import { ILocalUserModel } from '../../models/local/AuthLocalModel'

function SignUserPage() {
    const { data } = useFetch<ILocalUserModel>({
        key: 'localUserData',
        queryFn: async () =>
            AsyncHelper.createPromise(() => {
                return AppInfoLocalDB.getOneById(
                    APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
                    'user'
                )
            }),
        options: {
            isExecuteOnInit: true,
            echoState: 'none'
        }
    })

    return (
        <GuardedRouteComponent authGuard={true}>
            <div
                className='min-h-screen bg-white p-10 flex flex-col items-center'
                data-theme='winter'
            >
                <div className='flex justify-start w-full'>
                    <AuthSigUserSignOutFeature />
                </div>
                <LogoComponent className='w-24' />
                <h1 className='text-xl font-bold mt-4 mb-4'>Login to your account</h1>
                <AuthSignUserEnterPasswordFeature />
                {
                    !!data && (
                        <div className='mt-auto text-start w-full'>
                            {data?.organizationName}
                        </div>
                    )
                }
            </div>
        </GuardedRouteComponent>
    )
}

export default SignUserPage
