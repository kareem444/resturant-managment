import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGE_SRC } from 'src/common/constants/SrcConstants';

interface PosLogoComponentProps {
    path: string;
}

const PosLogoComponent: FC<PosLogoComponentProps> = ({ path }) => {
    return (
        <li className='h-1/6'>
            <span className='active:bg-inherit active:text-inherit justify-center hover:bg-cyan-500 py-4 px-5 '>
                <NavLink to={path} className=' bg-white p-3 mask mask-squircle hover:scale-105 '>
                    <img className='' src={IMAGE_SRC.logo} alt='DashWind Logo' />
                </NavLink>
            </span>
        </li>
    )
};

export default PosLogoComponent;
