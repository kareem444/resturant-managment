import { FC } from "react";
import ErrorComponent from "src/common/components/ErrorComponent";
import LoadingSpinComponent from "src/common/components/LoadingSpinComponent";
import NoDataAvailableComponent from "src/common/components/NoDataAvailableComponent";
import { AdminDetailsPageContainer, IAdminDetailsPageContainerProps } from "./AdminDetailsPageContainer";

const Wrapper = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="card w-full p-6 bg-base-100 shadow-xl border border-gray-300 dark:border-none flex justify-center items-center my-auto flex-1">
            {children}
        </div>
    );
};

export interface IAdminDetailsStatusContainerProps extends Omit<IAdminDetailsPageContainerProps, "className"> {
    isData?: boolean;
    isLoading?: boolean;
    isError?: boolean;
}

const AdminDetailsStatusContainer: FC<IAdminDetailsStatusContainerProps> = ({
    isData,
    isLoading,
    isError,
    tableContent,
    onRefresh,
    onPdf,
    onPrint,
    onWhatsapp
}) => {
    if (isError) {
        return (
            <Wrapper>
                <ErrorComponent />
            </Wrapper>
        );
    }

    if (isLoading) {
        return (
            <Wrapper>
                <LoadingSpinComponent />
            </Wrapper>
        );
    }

    if (!isData) {
        return (
            <Wrapper>
                <NoDataAvailableComponent />
            </Wrapper>
        );
    }

    return (
        <AdminDetailsPageContainer
            tableContent={tableContent}
            onRefresh={onRefresh}
            onPdf={onPdf}
            onPrint={onPrint}
            onWhatsapp={onWhatsapp}
        />
    );
};

export default AdminDetailsStatusContainer;
