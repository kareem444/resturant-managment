import { AdminEchoStateConstants } from "src/app/admin/constants/AdminEchoStateConstants"
import { AuthEchoStateConstants } from "src/app/auth/constants/AuthEchoStateConstants"

export const EchoStateConstants = {
    ...AdminEchoStateConstants,
    ...AuthEchoStateConstants
}