import { IMAGE_SRC } from "../constants/imageConstants"

function SplashScreenComponent(){
    return(
        <div className="w-full h-screen flex justify-center items-center animate-pulse text-gray-300 dark:text-gray-200 bg-base-100">
            <img src={IMAGE_SRC.logo} className="w-40"/>
        </div>
    )
}

export default SplashScreenComponent