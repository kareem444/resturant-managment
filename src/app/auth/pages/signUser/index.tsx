import LogoComponent from 'src/common/components/LogoComponent'
import GuardedRouteComponent from 'src/common/components/GuardedRouteComponent'
import AuthSigUserSignOutFeature from './features/AuthSigUserSignOutFeature'
import AuthSignUserEnterPasswordFeature from './features/AuthSignUserEnterPasswordFeature'
import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import { ILocalOrganizationModel } from '../../models/local/AuthLocalModel'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { routes } from 'src/common/routes/routes'
import useCurrentUser from 'src/common/hooks/useCurrentUser'
import { AuthSignUserRepo } from './repo/AuthSignUserRepo'

function SignUserPage() {
    const { isCurrentUser, roleType } = useCurrentUser()

    const { data } = useFetch<ILocalOrganizationModel>({
        key: AsyncStateConstants.localOrganizationData,
        queryFn: AuthSignUserRepo.getOrganization,
        options: {
            isExecuteOnInitIfNoData: true,
            echoState: 'none'
        }
    })

    const pathToRedirect =
        roleType === 'pos'
            ? routes.pos.home.products.fullPath
            : routes.admin.dashboard.fullPath

    return (
        <GuardedRouteComponent authGuard={true}>
            <GuardedRouteComponent
                pathToRedirect={pathToRedirect}
                guard={!isCurrentUser}
            >
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
                    {!!data && (
                        <div className='mt-auto text-start w-full'>
                            {data?.organizationName}
                        </div>
                    )}
                </div>
            </GuardedRouteComponent>
        </GuardedRouteComponent>
    )
}

export default SignUserPage
