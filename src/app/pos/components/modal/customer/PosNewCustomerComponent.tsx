import InputComponent from 'src/common/components/InputComponent'

interface Props {
    searchedMobileNumber: string
}

const PosNewCustomerComponent: React.FC<Props> = ({ searchedMobileNumber }) => {
    return (
        <>
            <div className='divider my-0 mb-4'></div>
            <div className='grid sm:grid-cols-2 gap-4 mb-3'>
                <InputComponent labelTitle='Name' labelStyle='text-lg' />
                <InputComponent
                    labelTitle='Mobile'
                    labelStyle='text-lg'
                    type='number'
                    defaultValue={searchedMobileNumber}
                />
                <InputComponent
                    labelTitle='Tax Number'
                    labelStyle='text-lg'
                    type='number'
                />
                <InputComponent labelTitle='Address' labelStyle='text-lg' />
            </div>
            <div
                className='btn btn-info text-white bg-cyan-500 w-full mt-4'
                onClick={() => { }}
            >
                Submit
            </div>
        </>
    )
}

export default PosNewCustomerComponent
