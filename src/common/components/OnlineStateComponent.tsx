import useOnlineState from 'beautiful-react-hooks/useOnlineState'

export default function OnlineStateComponent() {
    const isOnline = useOnlineState()

    if (isOnline) {
        return (
            <div className="tooltip hover:bg-cyan-500 tooltip-info" data-tip="Online">
                <i className='fi fi-bs-wifi text-2xl w-16 h-14 my-3 justify-center m-auto text-white hover:bg-cyan-500'></i>
            </div>
        )
    }

    return (
        <div className="tooltip hover:bg-cyan-500 tooltip-info" data-tip="offLine" >
            <i className='fi fi-br-wifi-slash text-2xl w-16 h-14 my-3 justify-center m-auto text-white opacity-70 hover:bg-cyan-500'></i>
        </div >
    )
}
