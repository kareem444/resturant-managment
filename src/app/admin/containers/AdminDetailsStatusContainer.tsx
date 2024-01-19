import { FC } from 'react'
import ErrorComponent from 'src/common/components/ErrorComponent'
import LoadingSpinComponent from 'src/common/components/LoadingSpinComponent'
import NoDataAvailableComponent from 'src/common/components/NoDataAvailableComponent'
import { AdminDetailsPageContainer } from './AdminDetailsPageContainer'
import { ITableContent } from 'src/common/components/TableComponent'

const Wrapper = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='card w-full p-6 bg-base-100 shadow-xl flex justify-center items-center my-auto flex-1'>
            {children}
        </div>
    )
}

interface IAdminDetailsStatusContainerProps {
    isData?: boolean
    isLoading?: boolean
    isError?: boolean
    tableContent: ITableContent
}

const AdminDetailsStatusContainer: FC<IAdminDetailsStatusContainerProps> = ({
    isData,
    isLoading,
    isError,
    tableContent
}) => {
    if (isError) {
        return (
            <Wrapper>
                <ErrorComponent />
            </Wrapper>
        )
    }

    if (isLoading) {
        return (
            <Wrapper>
                <LoadingSpinComponent />
            </Wrapper>
        )
    }

    if (!isData) {
        return (
            <Wrapper>
                <NoDataAvailableComponent />
            </Wrapper>
        )
    }

    return <AdminDetailsPageContainer tableContent={tableContent} />
}

export default AdminDetailsStatusContainer
