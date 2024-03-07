import AdminDetailsStatusContainer from 'src/app/admin/containers/AdminDetailsStatusContainer'
import AdminGetRoleStructure from '../structures/AdminGetRoleStructure';

const AdminRolesDetailsFeature = () => {
    return <AdminDetailsStatusContainer {...AdminGetRoleStructure()} />;
};

export default AdminRolesDetailsFeature;