import { FC } from "react";

interface CollapseComponentProps {
    children: React.ReactNode;
    title: string;
}

const CollapseComponent: FC<CollapseComponentProps> = ({ children, title }) => {
    return (
        <div className="collapse collapse-plus px-2 card w-full bg-base-100 shadow-sm">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium px-4">
                <h3 className='text-lg'>{title}</h3>
            </div>
            <div className="collapse-content">
                {children}
            </div>
        </div>
    )
};

export default CollapseComponent;
