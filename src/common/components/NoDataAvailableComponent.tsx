import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const NoDataAvailableComponent = () => {
    return (
        <>
            <FontAwesomeIcon icon={faDatabase} className="text-6xl text-gray-400" />
            <p className='text-gray-400 mt-2 text-lg'>No Data Available</p>
        </>
    )
};

export default NoDataAvailableComponent;
