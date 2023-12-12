import { ObjectKeys } from "react-hook-form/dist/types/path/common";
import PosShiftModalComponent from "../components/modal/PosShiftModalComponent";
import PosSubmitPaymentModalComponent from "../components/modal/PosSubmitPaymentModalComponent";
import PosCustomerModalComponent from "../components/modal/customer/PosCustomerModalComponent";
import PosDiscountModalComponent from "../components/modal/discount/PosDiscountModalComponent";

export const PosModalStructure = {
    posShiftModalComponent: <PosShiftModalComponent />,
    posSubmitPaymentModalComponent: <PosSubmitPaymentModalComponent />,
    posCustomerModalComponent: <PosCustomerModalComponent />,
    posDiscountModalComponent: <PosDiscountModalComponent />,
}

export type PosModalStructureKeys = ObjectKeys<typeof PosModalStructure>
