import useCurrentUser from "../../../common/hooks/useCurrentUser"

export default function usePosPermissions() {
    const { isCurrentUser, isOrganizationOwner, roleType } = useCurrentUser()

    const isPosRole = roleType === 'pos' || roleType === 'dashboardAndPos'

    return {
        isPos: isCurrentUser && (isOrganizationOwner || isPosRole),
    }
}
