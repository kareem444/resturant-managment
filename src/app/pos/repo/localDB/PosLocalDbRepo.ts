import { IAdminComboOffersModel } from "src/app/admin/models/AdminComboOffersModel";
import { IAdminCustomerModel } from "src/app/admin/models/AdminCustomerModel";
import { IAdminDeliveryModel } from "src/app/admin/models/AdminDeliveryModel";
import { IAdminDiscountModel } from "src/app/admin/models/AdminDiscountModal";
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel";
import { IAdminPaymentsMethodsModel } from "src/app/admin/models/AdminPaymentsMethodsModel";
import { IAdminProductsModel } from "src/app/admin/models/AdminProductsModel";
import { IAdminTableModel } from "src/app/admin/models/AdminTableModel";
import {
    APP_POS_LOCAL_DB_COLLECTIONS,
    AppPosLocalDB,
} from "src/common/config/localDBConfig";
import { IPosData } from "../../interfaces";

export class PosLocalDBRepo {
    static async clearData() {
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.GROUPS);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.PRODUCTS);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.COMBO_OFFERS);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.TABLES);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.DELIVERY);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.DISCOUNTS);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.PAYMENTS_METHODS);
        await AppPosLocalDB.deleteAll(APP_POS_LOCAL_DB_COLLECTIONS.CUSTOMERS);
    }

    static async savingData(
        data: IPosData,
    ) {
        await PosLocalDBRepo.clearData();

        const handelData = async (data: any[] | undefined, collection: string) => {
            data?.forEach(async (item) => {
                await AppPosLocalDB.add(collection, item as any);
            });
        }

        await handelData(data.groups as any[], APP_POS_LOCAL_DB_COLLECTIONS.GROUPS);
        await handelData(data.products as any[], APP_POS_LOCAL_DB_COLLECTIONS.PRODUCTS);
        await handelData(data.comboOffers as any[], APP_POS_LOCAL_DB_COLLECTIONS.COMBO_OFFERS);
        await handelData(data.tables as any[], APP_POS_LOCAL_DB_COLLECTIONS.TABLES);
        await handelData(data.delivery as any[], APP_POS_LOCAL_DB_COLLECTIONS.DELIVERY);
        await handelData(data.discounts as any[], APP_POS_LOCAL_DB_COLLECTIONS.DISCOUNTS);
        await handelData(data.paymentsMethods as any[], APP_POS_LOCAL_DB_COLLECTIONS.PAYMENTS_METHODS);
        await handelData(data.customers as any[], APP_POS_LOCAL_DB_COLLECTIONS.CUSTOMERS);
    }

    static async getData() {
        const handleData = async<T>(collection: string) => {
            return await AppPosLocalDB.get(collection, {
                orderBy: ["createdAt", "desc"],
            }) as T[] || [];
        }

        return {
            groups: await handleData<IAdminGroupModel>(APP_POS_LOCAL_DB_COLLECTIONS.GROUPS),
            products: await handleData<IAdminProductsModel>(APP_POS_LOCAL_DB_COLLECTIONS.PRODUCTS),
            comboOffers: await handleData<IAdminComboOffersModel>(APP_POS_LOCAL_DB_COLLECTIONS.COMBO_OFFERS),
            tables: await handleData<IAdminTableModel>(APP_POS_LOCAL_DB_COLLECTIONS.TABLES),
            delivery: await handleData<IAdminDeliveryModel>(APP_POS_LOCAL_DB_COLLECTIONS.DELIVERY),
            discounts: await handleData<IAdminDiscountModel>(APP_POS_LOCAL_DB_COLLECTIONS.DISCOUNTS),
            paymentsMethods: await handleData<IAdminPaymentsMethodsModel>(APP_POS_LOCAL_DB_COLLECTIONS.PAYMENTS_METHODS),
            customers: await handleData<IAdminCustomerModel>(APP_POS_LOCAL_DB_COLLECTIONS.CUSTOMERS),
        };
    }
}
