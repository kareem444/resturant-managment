import useCurrentUser from "src/common/hooks/useCurrentUser";

const PosSignOutSlice = () => {
    const { deleteCurrentUser } = useCurrentUser();
    return (
        <div className="btn btn-error justify-between mb-1 text-slate-800" onClick={deleteCurrentUser}>
            <span>Sign Out</span>
            <i className='fi fi-rr-arrow-small-right h-6 text-xl'></i>
        </div>
    )
};

export default PosSignOutSlice;
