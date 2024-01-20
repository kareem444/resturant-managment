import AccordionComponent from 'src/common/components/AccordionComponent'
import { FC, useEffect, useState } from 'react'
import { AdminAccordionDataStructure } from '../structures/AdminAddRoleAccordionDataStructure'
import AdminPosRoleOptionsComponent from './AdminPosRoleOptionsComponent'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { iRoleTypes } from '../interfaces/AdminRoleInterface'

interface AdminRolesComponentsProps {
    selectedRoleType: iRoleTypes
}

const AdminRolesComponents: FC<AdminRolesComponentsProps> = ({
    selectedRoleType
}) => {
    const { setState: setRoles } = useEchoState(EchoStateConstants.selectedRoles)
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        setRoles({})
        setTitle(() => {
            switch (selectedRoleType) {
                case 'dashboard':
                    return 'Dashboard'
                case 'pos':
                    return 'POS'
                default:
                    return 'Dashboard and POS'
            }
        })
    }, [selectedRoleType])

    return (
        <div className='mt-5 border rounded-lg p-4'>
            <h3 className='text-center font-bold mb-5'>
                {`${title} Roles`}
            </h3>
            {selectedRoleType === 'dashboardAndPos' || selectedRoleType === 'dashboard' ? (
                <AccordionComponent
                    data={AdminAccordionDataStructure(selectedRoleType, setRoles)}
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
