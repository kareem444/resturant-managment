import { PosDrawerRoutes } from '../routes/PosDrawerRoutes'
import { Link, NavLink } from 'react-router-dom'
import { IMAGE_SRC } from '../../../common/constants/SrcConstants'

function PosDrawerContainer() {
    return (
        <ul className='menu w-28 bg-cyan-500 rounded-3xl m-3 ml-0 sm:ml-2'>
            <li className='text-xl h-1/6 '>
                <span className='active:bg-inherit active:text-inherit justify-center hover:bg-cyan-500 py-4 px-5'>
                    <a className=' bg-white p-3 mask mask-squircle hover:scale-105'>
                        <img className='' src={IMAGE_SRC.logo} alt='DashWind Logo' />
                    </a>
                </span>
            </li>
            <ul className='flex flex-col justify-between h-5/6'>
                <ul className=''>
                    {PosDrawerRoutes.map((route, k) => {
                        return (
                            <li key={k}>
                                {
                                    <NavLink
                                        end
                                        to={route.path}
                                        className={({ isActive }) =>
                                            `${isActive
                                                ? 'font-semibold rounded-2xl shadow-md bg-cyan-400 hover:bg-cyan-400'
                                                : ' font-normal'
                                            }` +
                                            ' active:text-accent-content w-16 h-14 my-3 justify-center m-auto text-white hover:scale-105 hover:bg-cyan-500'
                                        }
                                    >
                                        {route.icon}
                                    </NavLink>
                                }
                            </li>
                        )
                    })}
                </ul>
                <li>
                    <Link
                        to={'/app/pos/home'}
                        className='active:text-accent-content w-16 h-14 my-4 justify-center m-auto text-white hover:scale-105 hover:bg-cyan-500 bg-cyan-500'
                    >
                        <i className="fi fi-rr-settings text-2xl" />
                    </Link>
                </li>
            </ul>
        </ul>
    )
}

export default PosDrawerContainer
