import { AuthRepo } from "src/app/auth/repo/AuthRepo";

const AuthSigUserSignOutFeature = () => {
    const handelSignOut = async () => {
        await AuthRepo.signOut()
    }

    return (
        <button
            className='btn btn-ghost border border-gray-200 hover:text-white flex items-center gap-1 hover:bg-red-400'
            onClick={handelSignOut}
        >
            <i className='fi fi-rr-arrow-small-left h-6 text-xl'></i>
            <span>Sign out</span>
        </button>
    )
};

export default AuthSigUserSignOutFeature;
