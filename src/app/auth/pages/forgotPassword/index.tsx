import LandingIntroComponent from '../../components/AuthLandingIntroComponent'
import ForgotPasswordFormFeature from './features/ForgotPasswordFormFeature'

function ForgotPasswordPage(){
    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                        <LandingIntroComponent />
                </div>
                <div className='py-24 px-10'>
                    <ForgotPasswordFormFeature />
                </div>
            </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage