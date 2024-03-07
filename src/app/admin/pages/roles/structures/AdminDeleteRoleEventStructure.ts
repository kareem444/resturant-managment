import { IAdminRoleModel } from "src/app/admin/models/AdminRoleModel";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import useMutate from "src/common/DataHandler/hooks/server/useMutate";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import { AdminRolesRepo } from "../repo/AdminRolesRepo";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import useCrudHandler from "src/common/hooks/useCrudHandler";

const OnDeleteRoleModalDeleteEvent = (): {
    click: () => void;
} => {
    const { state: selectedRole } = useEchoState<IAdminRoleModel>(EchoStateConstants.selectedItem);
    const { deleteOperation } = useCrudHandler<IAdminRoleModel>('roles')

    const { mutate } = useMutate({
        queryFn: () => AdminRolesRepo.deleteRole(selectedRole.id!),
        options: {
            onSuccess() {
                deleteOperation(selectedRole)
                showNotification('Branch deleted successfully')
            },
            onError(e) {
                showNotification(e?.code, "error");
            },
        },
    });

    return {
        click: () => mutate(),
    };
};

export default OnDeleteRoleModalDeleteEvent;
