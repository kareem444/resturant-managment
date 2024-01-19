import AccordionComponent from 'src/common/components/AccordionComponent'
import { FC } from 'react'
import { AdminAccordionDataStructure } from '../structures/AdminAddRoleAccordionDataStructure'
import AdminPosRoleOptionsComponent from './AdminPosRoleOptionsComponent'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'

interface AdminRolesComponentsProps {
    isAdminRole?: boolean
}

const AdminRolesComponents: FC<AdminRolesComponentsProps> = ({
    isAdminRole
}) => {
    const { setState: setRoles } = useEchoState('roles')

    return (
        <div className='mt-5 border rounded-lg p-4'>
            <h3 className='text-center font-bold mb-5'>
                {isAdminRole ? 'Admin Roles' : 'POS Roles'}
            </h3>
            {isAdminRole ? (
                <AccordionComponent
                    data={AdminAccordionDataStructure(setRoles)}
                    className='bg-base-100 dark:border-gray-600'
                    firstChildFocus={false}
                    isToggle={true}
                />
            ) : (
                <AdminPosRoleOptionsComponent onResult={val => setRoles(val)} />
            )}
        </div>
    )
}

export default AdminRolesComponents
