import { AdminAsyncStateConstants } from "src/app/admin/constants/AdminAsyncStateConstants"
import { AuthAsyncStateConstants } from "src/app/auth/constants/AuthAsyncStateConstants"

export const AsyncStateConstants = {
    ...AdminAsyncStateConstants,
    ...AuthAsyncStateConstants
}