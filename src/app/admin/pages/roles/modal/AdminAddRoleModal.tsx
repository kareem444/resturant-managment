import FormComponent from "src/common/components/FormComponent";
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState";
import { IRoleTypes } from "../interfaces/AdminRoleInterface";
import { EchoStateConstants } from "src/common/constants/EchoStateConstants";
import AdminRolesComponents from "../components/AdminRolesComponents";
import { AdminAddRoleStructure } from "../structures/AdminAddRoleStructure";

const AdminAddRoleModal = () => {
    const { state: roleType, setState: setIsAdminRole } =
        useEchoState<IRoleTypes>(
            EchoStateConstants.selectedRoleType,
            "dashboardAndPos"
        );

    return (
        <>
            <FormComponent
                {...AdminAddRoleStructure(setIsAdminRole)}
                child={<AdminRolesComponents selectedRoleType={roleType} />}
            />
        </>
    );
};

export default AdminAddRoleModal;
