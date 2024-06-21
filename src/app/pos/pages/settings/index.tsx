import useCurrentUser from "src/common/hooks/useCurrentUser";
import PosQuickSettingsFeature from "./features/PosQuickSettingsFeature";
import PosSettingsFeature from "./features/PosSettingsFeature";

export default function PosSettingsPage() {
    const { roleType, isOrganizationOwner, deleteCurrentUser, currentUser } = useCurrentUser();

    return (
        <div className="p-4 h-screen flex gap-3">
            <div className="h-full overflow-y-scroll no-scrollbar w-4/6">
                <PosSettingsFeature />
            </div>
            <div className="w-2/6 ">
                <PosQuickSettingsFeature
                    roleType={roleType}
                    isOrganizationOwner={isOrganizationOwner}
                    deleteCurrentUser={deleteCurrentUser}
                    currentUser={currentUser}
                />
            </div>
        </div>
    );
}
