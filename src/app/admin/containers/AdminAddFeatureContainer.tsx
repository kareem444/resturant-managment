import { FC } from "react";
import useAdminPermissions from "../hooks/useAdminPermissions";

interface AdminAddFeatureContainerProps {
  children: React.ReactNode;
}

const AdminAddFeatureContainer: FC<
  AdminAddFeatureContainerProps
> = ({ children }) => {
  const { isCanAdd } = useAdminPermissions();

  if (!isCanAdd) return <></>;

  return (
    <>
      {children}
      <div className='divider my-2 w-1/4  mx-auto'></div>
    </>
  )
};

export default AdminAddFeatureContainer;
