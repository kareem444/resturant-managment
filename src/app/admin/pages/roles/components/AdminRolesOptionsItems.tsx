import { FC } from 'react'
import RoleOptionsComponent, {
    AdminRoleOptionsComponentProps
} from './AdminAdminRoleOptionsComponent'

interface AdminRolesOptionsItemsProps {
    items: AdminRoleOptionsComponentProps[]
}

const AdminRolesOptionsItems: FC<AdminRolesOptionsItemsProps> = ({ items }) => {
    return (
        <>
            {items.map((item, index) => {
                return (
                    <RoleOptionsComponent
                        {...item}
                        showDivider={index !== items.length - 1 ? true : false}
                        key={index}
                    />
                )
            })}
        </>
    )
}
export default AdminRolesOptionsItems
