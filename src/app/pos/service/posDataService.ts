import { ILocalCurrentUserModel } from "src/app/auth/models/local/AuthLocalModel";
import { IPosAppState } from "../redux/PosReduxInterface";
import { PosFirebaseRepo } from "../repo/firebase/PosFirebaseRepo";
import { PosLocalDBRepo } from "../repo/localDB/PosLocalDbRepo";
import { IPosData } from "../interfaces";
import { showNotification } from "src/common/components/ShowNotificationComponent";
import { unExpectedError } from "src/common/DataHandler/constants/ErrorsConstants";

export class PosDataService {
    static async initData(
        setApp: (payload: Partial<IPosAppState>) => void,
        setData: (payload: Partial<IPosData>) => void,
    ) {
        setApp({ isLoading: true });
        const data = await PosLocalDBRepo.getData();
        setData(data);
        setApp({ isLoading: false });
    }

    static async fetchData(
        setApp: (payload: Partial<IPosAppState>) => void,
        setData: (payload: Partial<IPosData>) => void,
        currentUser: ILocalCurrentUserModel | undefined
    ) {
        try {
            setApp({ isLoading: true });
            const data: IPosData = await PosFirebaseRepo.fetchData(setApp, currentUser);
            setApp({ loadingText: { show: true, showDots: true, text: "Saving Data", percent: 95, } });
            await PosLocalDBRepo.savingData(data);
            setData(data);
            showNotification("data_fetched_successfully");
        } catch (error) {
            showNotification(unExpectedError.code, "error");
        } finally {
            setApp({ isLoading: false, loadingText: { show: false } });
        }
    }

    static async clearData() { 
        await PosLocalDBRepo.clearData();
    }
}
