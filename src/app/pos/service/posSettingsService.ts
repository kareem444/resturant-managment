import { IPosAppState } from "../redux/PosReduxInterface";
import { PosDataService } from "./posDataService";

export class PosSettingService {
    static async signOut(
        deleteCurrentUser: () => void,
        setApp: (payload: Partial<IPosAppState>) => void,
        clearData: () => void
    ) {
        setApp({ isLoading: true })
        await PosDataService.clearData();
        deleteCurrentUser();
        clearData();
        setApp({ isLoading: false })
    }
}