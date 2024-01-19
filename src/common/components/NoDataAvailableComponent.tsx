import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const NoDataAvailableComponent = () => {
    return (
        <>
            <FontAwesomeIcon icon={faDatabase} className="text-8xl text-gray-400" />
            <p className='text-gray-400 mt-4 text-xl'>No Data Available</p>
        </>
    )
};

export default NoDataAvailableComponent;
