import { FC } from 'react';
import GuardedRouteComponent from 'src/common/components/GuardedRouteComponent';
import LogoComponent from 'src/common/components/LogoComponent';

interface AuthContainerProps {
    children: React.ReactNode;
    title?: string;
}

const AuthContainer: FC<AuthContainerProps> = ({ children, title }) => {
    return (
        <GuardedRouteComponent notAuthGuard={true}>
            <div
                className='min-h-screen bg-white p-10 flex flex-col items-center justify-center'
                data-theme='winter'
            >
                <LogoComponent className='w-24' />
                {
                    !!title && <h1 className='text-xl font-bold mt-4'>{title}</h1>
                }
                <div
                    className='card mx-auto w-full sm:max-w-2xl md:max-w-xl px-8 py-3 mt-6'
                    style={{ boxShadow: '1px 1px 5px #838383D5' }}
                >
                    {children}
                </div>
            </div>
        </GuardedRouteComponent>
    )
};

export default AuthContainer;
