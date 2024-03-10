import { ILocalCurrentUserModel } from 'src/app/auth/models/local/AuthLocalModel'
import useEchoState from '../DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from '../constants/EchoStateConstants'
import { useEffect } from 'react'
import { APP_INFO_LOCAL_DB_COLLECTIONS, APP_INFO_LOCAL_DB_COLLECTIONS_IDS, AppInfoLocalDB } from '../config/localDBConfig'
import { IDashboardRoles, IRoleTypes } from 'src/app/admin/pages/roles/interfaces/AdminRoleInterface'

const useCurrentUser = () => {
    const { state, setState } = useEchoState<ILocalCurrentUserModel | undefined>(EchoStateConstants.currentUser)

    const isCurrentUser = !!state;

    const deleteCurrentUser = () => {
        AppInfoLocalDB.deleteById(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER)
        setState(undefined)
    }

    const permissions: IDashboardRoles | undefined = state?.permissions

    const roleType: IRoleTypes | undefined = state?.roleType

    const isOrganizationOwner: boolean = state?.isOrganizationOwner || false

    useEffect(() => {
        if (isCurrentUser && !isOrganizationOwner && !roleType) {
            deleteCurrentUser()
        }
    }, [isCurrentUser, isOrganizationOwner, roleType])

    return {
        currentUser: state,
        isCurrentUser,
        deleteCurrentUser,
        permissions,
        roleType,
        isOrganizationOwner,
        userId: state?.userId,
        setCurrentUser: setState
    }
}

export default useCurrentUser
