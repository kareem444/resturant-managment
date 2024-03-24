import { IAppModel } from "src/common/interfaces/modeInterface";
import { IAdminAdditionsInputs } from "../pages/additions/interfaces/AdminAdditionInterface";

export interface IAdminAdditionsModel extends IAppModel, Omit<IAdminAdditionsInputs, "image"> {
    image?: string;
}