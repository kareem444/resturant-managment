import useCurrentUser from "../../../common/hooks/useCurrentUser"

export default function usePosPermissions() {
    const { isCurrentUser, is_organization_owner, roleType } = useCurrentUser()

    const isPosRole = roleType === 'pos' || roleType === 'dashboardAndPos'

    return {
        isPos: isCurrentUser && (is_organization_owner || isPosRole),
    }
}
