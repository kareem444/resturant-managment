import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import { AdminCustomersRepo } from "src/app/admin/pages/customers/repo/AdminCustomersRepo";
import { AdminGroupsRepo } from "src/app/admin/pages/groups/repo/AdminGroupsRepo";
import { AdminPaymentsMethodsRepo } from "src/app/admin/pages/paymentsMethods/repo/AdminPaymentsMethodsRepo";
import { AsyncHelper } from "src/common/DataHandler/helper/ServerDataHandlerHelper";
import { IPosAppState } from "../../redux/PosReduxInterface";
import { ILocalCurrentUserModel } from "src/app/auth/models/local/AuthLocalModel";
import { IAdminBranchModel } from "src/app/admin/models/AdminBranchModel";
import { AdminBranchesRepo } from "src/app/admin/pages/branches/repo/AdminBranchesRepo";
import { IAdminAdditionsModel } from "src/app/admin/models/AdminAdditionsModel";
import { AdminAdditionsRepo } from "src/app/admin/pages/additions/repo/AdminAdditionsRepo";
import { PosFirebaseDeliveryRepo } from "./PosFirebaseDeliveryRepo";
import { PosFirebaseTableRepo } from "./PosFirebaseTableRepo";
import { PosFirebaseProductsRepo } from "./PosFirebaseProductsRepo";
import { IAdminTaxModel } from "src/app/admin/models/AdminTaxModel";
import { PosFirebaseTaxesRepo } from "./PosFirebaseTaxesRepo";
import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { PosFireBaseComboOfferRepo } from "./PosFireBaseComboOfferRepo";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { PosFirebaseDiscountRepo } from "./PosFirebaseDiscountRepo";

export class PosFirebaseRepo {
    static async fetchData(
        setApp: (payload: Partial<IPosAppState>) => void,
        currentUser: ILocalCurrentUserModel | undefined
    ) {
        const handleLoadingText = (text: string, percent: number) => {
            setApp({
                loadingText: {
                    show: true,
                    percent,
                    text,
                    showDots: true,
                },
            });
        }

        return await AsyncHelper.createPromise(async () => {
            handleLoadingText("Fetching branches", 5);
            const branches: IAdminBranchModel[] = await AdminBranchesRepo.getBranches();
            handleLoadingText("Fetching additions", 10);
            const additions: IAdminAdditionsModel[] = await AdminAdditionsRepo.getAdditions();
            handleLoadingText("Fetching taxes", 15);
            const taxes: IAdminTaxModel[] = await PosFirebaseTaxesRepo.getTaxes(branches, currentUser?.branch?.id);
            handleLoadingText("Fetching groups", 20);
            const groups: IAdminGroupModel[] = await AdminGroupsRepo.getGroups();
            handleLoadingText("Fetching payments methods", 30);
            const paymentsMethods: IAdminPaymentsMethodsModel[] = await AdminPaymentsMethodsRepo.getPaymentsMethods();
            handleLoadingText("Fetching customers", 40);
            const customers: IAdminCustomerModel[] = await AdminCustomersRepo.getCustomers();
            handleLoadingText("Fetching delivery", 50);
            const delivery: IAdminDeliveryModel[] | undefined = await PosFirebaseDeliveryRepo.getDeliveries(branches, currentUser?.branch?.id);
            handleLoadingText("Fetching tables", 60);
            const tables: IAdminTableModel[] | undefined = await PosFirebaseTableRepo.getTables(branches, currentUser?.branch?.id);
            handleLoadingText("Fetching products", 70);
            const products: IAdminProductsModel[] | undefined = await PosFirebaseProductsRepo.getProducts(
                branches,
                groups,
                taxes,
                additions,
                currentUser?.branch?.id
            );
            handleLoadingText("Fetching combo offers", 80);
            const comboOffers: IAdminComboOffersModel[] | undefined = await PosFireBaseComboOfferRepo.getComboOffers(
                branches,
                products,
                currentUser?.branch?.id
            );
            handleLoadingText("Fetching discounts", 90);
            const discounts: IAdminDiscountModel[] | undefined = await PosFirebaseDiscountRepo.getDiscounts(
                branches,
                products,
                customers,
                currentUser?.branch?.id
            );

            return {
                groups,
                products,
                comboOffers,
                tables,
                delivery,
                discounts,
                paymentsMethods,
                customers,
            };
        });
    }
}
