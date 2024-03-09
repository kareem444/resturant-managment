import { IAdminUnitInputs } from "../pages/units/interfaces/AdminUnitsInterface";

export interface IAdminUnitModel extends IAdminUnitInputs {
    id?: string
    createdAt?: Date
    updatedAt?: Date
}