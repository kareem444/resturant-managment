import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarRoute } from 'src/app/pos/routes/PosDrawerRoutes';

const IconNavLinkComponent: FC<SideBarRoute> = ({ path, icon }) => {
    return (
        <li>
            {
                <NavLink
                    end
                    to={path}
                    className={({ isActive }) =>
                        `${isActive
                            ? 'rounded-2xl shadow-md bg-cyan-400 hover:bg-cyan-400'
                            : ' font-normal'
                        }` +
                        ' active:text-accent-content w-16 h-14 my-3 justify-center m-auto text-white hover:scale-105 hover:bg-cyan-500'
                    }
                >
                    {icon}
                </NavLink>
            }
        </li>
    )
};

export default IconNavLinkComponent;
