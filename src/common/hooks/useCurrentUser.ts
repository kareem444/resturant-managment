import { ILocalCurrentUserModel } from 'src/app/auth/models/local/AuthLocalModel'
import useEchoState from '../DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from '../constants/EchoStateConstants'
import { useEffect } from 'react'
import { APP_INFO_LOCAL_DB_COLLECTIONS, APP_INFO_LOCAL_DB_COLLECTIONS_IDS, AppInfoLocalDB } from '../config/localDBConfig'
import { IDashboardRoles, iRoleTypes } from 'src/app/admin/pages/roles/interfaces/AdminRoleInterface'
import { useLocation } from 'react-router-dom'

const useCurrentUser = () => {
    const { state, setState } = useEchoState<ILocalCurrentUserModel | undefined>(EchoStateConstants.currentUser)
    const location = useLocation()

    useEffect(() => {
        if (!state) {
            const getCurrentUser = async () => {
                return await AppInfoLocalDB.getOneById(
                    APP_INFO_LOCAL_DB_COLLECTIONS.INFO,
                    APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER
                )
            }

            getCurrentUser()
                .then((currentUser) => {
                    setState(currentUser)
                })
                .catch(() => {
                    setState(undefined)
                })
        }
    }, [location.pathname])

    const isCurrentUser = !!state;

    const deleteCurrentUser = () => {
        AppInfoLocalDB.deleteById(APP_INFO_LOCAL_DB_COLLECTIONS.INFO, APP_INFO_LOCAL_DB_COLLECTIONS_IDS.CURRENT_USER)
        setState(undefined)
    }

    const permissions: IDashboardRoles | undefined = state?.permissions

    const roleType: iRoleTypes | undefined = state?.roleType

    const is_organization_owner: boolean = state?.is_organization_owner || false

    useEffect(() => {
        if (isCurrentUser && !is_organization_owner && !roleType) {
            deleteCurrentUser()
        }
    }, [isCurrentUser, is_organization_owner, roleType])

    return {
        currentUser: state,
        isCurrentUser,
        deleteCurrentUser,
        permissions,
        roleType,
        is_organization_owner,
        userId: state?.user_id,
        setCurrentUser: setState
    }
}

export default useCurrentUser
